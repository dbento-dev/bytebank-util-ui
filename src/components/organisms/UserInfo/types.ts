import { BoxProps } from '@mui/material/Box'

export interface UserInfoProps extends BoxProps {
  name: string
  avatarUrl?: string
}
