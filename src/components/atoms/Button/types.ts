import { ButtonProps as MuiButtonProps } from '@mui/material/Button'

type BaseProps = Omit<MuiButtonProps, 'variant'>

export interface ButtonProps extends BaseProps {
  variant: 'info' | 'error' | 'neutral'
}
