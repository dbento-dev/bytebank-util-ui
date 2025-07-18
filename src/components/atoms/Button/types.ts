import { ButtonProps as MuiButtonProps } from '@mui/material/Button'

export type ButtonColorVariant = 'info' | 'error' | 'neutral'

export interface ButtonProps extends MuiButtonProps {
  colorVariant?: ButtonColorVariant
}
