import { PropsWithChildren } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './styles/theme'

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)

// export default ThemeProvider
