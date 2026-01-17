import { Logo } from './Logo'
import { SearchBar } from './SearchBar'

interface HeaderProps {
  onSearchSubmit?: (query: string) => void
}

export function Header({ onSearchSubmit }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-[30px]">
      <Logo />
      <SearchBar onSearchSubmit={onSearchSubmit} />
    </header>
  )
}
