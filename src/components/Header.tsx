import { Logo } from './Logo'
import { SearchBar } from './SearchBar'

interface HeaderProps {
  onSearchSubmit?: (query: string) => void
}

export function Header({ onSearchSubmit }: HeaderProps) {
  return (
    <header className="flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between md:py-[30px]">
      <Logo />
      <SearchBar onSearchSubmit={onSearchSubmit} />
    </header>
  )
}
