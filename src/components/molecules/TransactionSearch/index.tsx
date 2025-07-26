import debounce from 'lodash.debounce'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import type { TransactionSearchProps } from './types'
import { StyledTextField } from './styles'
import { useMemo, useState } from 'react'

export function TransactionSearch({
  onSearch = () => {}
}: TransactionSearchProps) {
  const [inputValue, setInputValue] = useState('')

  const debouncedSearch = useMemo(
    () =>
      debounce((term: string) => {
        onSearch(term)
      }, 500),
    [onSearch]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setInputValue(val)
    debouncedSearch(val)
  }

  return (
    <StyledTextField
      fullWidth
      variant="outlined"
      placeholder="Buscar transações..."
      value={inputValue}
      onChange={handleChange}
      size="small"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          )
        }
      }}
    />
  )
}
