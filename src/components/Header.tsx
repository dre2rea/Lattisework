import type { Term } from '../types'
import { Logo } from './Logo'
import { SearchBar } from './SearchBar'

interface HeaderProps {
  searchQuery?: string
  onSearchSubmit?: (query: string) => void
  getSuggestions?: (query: string) => Term[]
}

export function Header({ searchQuery, onSearchSubmit, getSuggestions }: HeaderProps) {
  return (
    <header className="flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between md:py-[20px]">
      <Logo />
      <SearchBar
        searchQuery={searchQuery}
        onSearchSubmit={onSearchSubmit}
        getSuggestions={getSuggestions}
      />
    </header>
  )
}
