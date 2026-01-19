import { useState, useEffect, useRef, useCallback } from 'react'
import { terms } from '../data/terms'
import type { Term } from '../types'

interface SearchBarProps {
  onSearchSubmit?: (query: string) => void // All search methods → filters grid
}

export function SearchBar({ onSearchSubmit }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Term[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [keyboardActiveIndex, setKeyboardActiveIndex] = useState<number | null>(null)
  const [mouseActiveIndex, setMouseActiveIndex] = useState<number | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Update suggestions based on query
  useEffect(() => {
    if (query.trim() && isFocused) {
      const searchQuery = query.toLowerCase()
      const matches = terms
        .filter((term) => term.label.toLowerCase().includes(searchQuery))
        .slice(0, 5)
      setSuggestions(matches)
      setShowSuggestions(matches.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [query, isFocused])

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Escape key to close dropdown
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showSuggestions) {
        setShowSuggestions(false)
        inputRef.current?.blur()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [showSuggestions])

  // Handle autocomplete selection (filters grid with selected term)
  const handleSuggestionSelect = useCallback(
    (term: Term) => {
      setQuery(term.label)
      setShowSuggestions(false)
      setKeyboardActiveIndex(null)
      setMouseActiveIndex(null)
      inputRef.current?.blur()
      if (onSearchSubmit) {
        onSearchSubmit(term.label)
      }
    },
    [onSearchSubmit]
  )

  // Handle search submission (filters grid)
  const handleSearchSubmit = useCallback(
    (searchQuery: string) => {
      setShowSuggestions(false)
      setKeyboardActiveIndex(null)
      setMouseActiveIndex(null)
      inputRef.current?.blur()
      if (onSearchSubmit && searchQuery.trim()) {
        onSearchSubmit(searchQuery.trim())
      }
    },
    [onSearchSubmit]
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setKeyboardActiveIndex(null)
    setMouseActiveIndex(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Arrow navigation only when suggestions are showing
    if (e.key === 'ArrowDown' && showSuggestions && suggestions.length > 0) {
      e.preventDefault()
      setMouseActiveIndex(null)
      setKeyboardActiveIndex((prev) =>
        prev === null || prev >= suggestions.length - 1 ? 0 : prev + 1
      )
    } else if (e.key === 'ArrowUp' && showSuggestions && suggestions.length > 0) {
      e.preventDefault()
      setMouseActiveIndex(null)
      setKeyboardActiveIndex((prev) =>
        prev === null || prev <= 0 ? suggestions.length - 1 : prev - 1
      )
    } else if (e.key === 'Tab' && keyboardActiveIndex !== null && suggestions[keyboardActiveIndex]) {
      // Tab selects highlighted suggestion (filters grid)
      e.preventDefault()
      handleSuggestionSelect(suggestions[keyboardActiveIndex])
    } else if (e.key === 'Enter') {
      // Enter always filters grid
      e.preventDefault()
      if (keyboardActiveIndex !== null && suggestions[keyboardActiveIndex]) {
        // If a suggestion is highlighted, use that term
        handleSuggestionSelect(suggestions[keyboardActiveIndex])
      } else {
        // Otherwise, use the typed query
        handleSearchSubmit(query)
      }
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
    if (query.trim() && suggestions.length > 0) {
      setShowSuggestions(true)
    }
  }

  const handleBlur = () => {
    // Delay to allow click events on suggestions to fire
    setTimeout(() => {
      setIsFocused(false)
    }, 150)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearchSubmit(query)
  }

  // Highlight matching text in suggestion
  const highlightMatch = (text: string, searchQuery: string) => {
    if (!searchQuery.trim()) return <span>{text}</span>

    // Escape special regex characters to prevent errors
    const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`(${escapedQuery})`, 'gi')
    const parts = text.split(regex)

    return parts.map((part, index) => {
      if (part.toLowerCase() === searchQuery.toLowerCase()) {
        return (
          <span key={index} className="text-ink font-bold">
            {part}
          </span>
        )
      }
      return (
        <span key={index} className="text-muted">
          {part}
        </span>
      )
    })
  }

  const activeIndex = keyboardActiveIndex ?? mouseActiveIndex

  return (
    <div ref={containerRef} className="relative w-full md:w-auto">
      <form onSubmit={handleSubmit} className="flex gap-1.5">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search terms"
          className="px-3 py-1.5 text-sm border border-ink flex-1 md:flex-none md:w-[258px] font-mono bg-cream focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-1.5 text-sm bg-ink text-cream border border-ink cursor-pointer transition-all duration-200 hover:bg-cream hover:text-ink shrink-0"
        >
          Search
        </button>
      </form>

      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 w-full md:w-[258px] mt-0 bg-cream border border-ink border-t-0 z-50">
          {suggestions.map((term, index) => (
            <button
              key={term.id}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault() // Prevent blur on input - critical for reliable clicks
                handleSuggestionSelect(term)
              }}
              onMouseEnter={() => {
                setMouseActiveIndex(index)
                setKeyboardActiveIndex(null)
              }}
              onMouseLeave={() => setMouseActiveIndex(null)}
              className={`w-full px-3 py-2 text-left text-sm font-mono cursor-pointer transition-colors duration-100 flex items-center gap-2 ${
                index === activeIndex ? 'bg-ink/5' : 'bg-cream'
              } ${index < suggestions.length - 1 ? 'border-b border-border' : ''}`}
            >
              {/* Magnifying glass icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                className="shrink-0"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-muted"
                />
                <path
                  d="M13.5 13.5L17 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="text-muted"
                />
              </svg>
              <span>{highlightMatch(term.label, query)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
