import { Search } from 'lucide-react'
import * as Input from '../../atoms/Input'
import { SearchInputStyled } from './styles'

interface SearchInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <SearchInputStyled>
      <Input.Root>
        <Input.Prefix>
          <Search />
        </Input.Prefix>
        <Input.Control
          type="text"
          placeholder="Buscar"
          value={value}
          onChange={onChange}
        />
      </Input.Root>
    </SearchInputStyled>
  )
}
