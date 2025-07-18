import { OutlinedInputProps } from '@mui/material/OutlinedInput'

export interface InputFieldProps extends Omit<OutlinedInputProps, 'label'> {
  label: string
  id: string
}
