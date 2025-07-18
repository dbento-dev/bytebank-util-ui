import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton'

export type IconButtonVariant = 'edit' | 'delete'
export interface IconButtonProps extends MuiIconButtonProps {
  variant: IconButtonVariant
}
