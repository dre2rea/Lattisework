import { useState, useEffect, useMemo } from 'react'

/**
 * Preloads an array of image URLs and returns loading state.
 * Returns true when all images are loaded or after timeout.
 */
export function useImagePreload(urls: string[], timeout = 3000): boolean {
  // Create a stable key from URLs to use as dependency
  const urlsKey = useMemo(() => urls.join(','), [urls])

  // Track which urlsKey we've completed loading for
  const [loadedKey, setLoadedKey] = useState<string | null>(null)

  useEffect(() => {
    // Skip if no URLs to load
    if (urls.length === 0) {
      // Use microtask to avoid synchronous setState warning
      queueMicrotask(() => setLoadedKey(urlsKey))
      return
    }

    let isCancelled = false

    // Timeout fallback - don't wait forever
    const timeoutId = setTimeout(() => {
      if (!isCancelled) {
        setLoadedKey(urlsKey)
      }
    }, timeout)

    // Preload all images
    const preloadPromises = urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image()
          img.onload = () => resolve()
          img.onerror = () => resolve() // Resolve even on error to not block
          img.src = url
        })
    )

    Promise.all(preloadPromises).then(() => {
      if (!isCancelled) {
        clearTimeout(timeoutId)
        setLoadedKey(urlsKey)
      }
    })

    return () => {
      isCancelled = true
      clearTimeout(timeoutId)
    }
  }, [urls, urlsKey, timeout])

  // Ready when current urlsKey matches the loaded key
  return loadedKey === urlsKey
}
