import { SelectProps } from '@mui/material/Select'

export interface SelectOption {
  value: string | number
  label: string
}

export type SelectFieldProps = SelectProps & {
  label: string
  options: SelectOption[]
  id: string
  placeholder?: string
}
