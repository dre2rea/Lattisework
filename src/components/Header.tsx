import { Logo } from './Logo'
import { SearchBar } from './SearchBar'

interface HeaderProps {
  onSearch?: (query: string) => void
}

export function Header({ onSearch }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-[30px]">
      <Logo />
      <SearchBar onSearch={onSearch} />
    </header>
  )
}
