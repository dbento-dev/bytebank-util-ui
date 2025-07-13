import { SelectProps } from '@mui/material/Select'

export type SelectOption = {
  label: string
  value: string | number
}

export type SelectFieldProps = SelectProps & {
  options: SelectOption[]
}
