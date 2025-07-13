import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton'

type BaseProps = Omit<MuiIconButtonProps, 'children'>

export interface IconButtonProps extends BaseProps {
  variant: 'delete' | 'edit'
}

export interface CustomProps {
  customVariant: 'delete' | 'edit'
}
