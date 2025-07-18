import { BoxProps } from '@mui/material/Box'

export interface WelcomeHeaderProps extends BoxProps {
  userName: string
  welcomeMessage: string
  dateString: string
}
