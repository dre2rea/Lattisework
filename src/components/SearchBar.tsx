import { useState } from 'react'

interface SearchBarProps {
  onSearch?: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(query)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-1.5">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search something"
        className="px-3 py-1.5 text-sm border border-ink w-[258px] font-mono bg-cream focus:outline-none focus:border-muted"
      />
      <button
        type="submit"
        className="px-4 py-1.5 text-sm bg-ink text-cream border border-ink cursor-pointer transition-all duration-200 hover:bg-cream hover:text-ink"
      >
        Search
      </button>
    </form>
  )
}
