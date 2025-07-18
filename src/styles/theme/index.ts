import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    primary: {
      main: '#ed4a4c',
      contrastText: '#ffffff'
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#d23a3c',
      contrastText: '#ffffff'
    },
    warning: {
      main: '#eab308',
      light: '#facc15',
      dark: '#ce9c07',
      contrastText: '#ffffff'
    },
    info: {
      main: '#2d68fd',
      light: '#60a5fa',
      dark: '#001C41',
      contrastText: '#ffffff'
    },
    success: {
      main: '#22c55e',
      light: '#4ade80',
      dark: '#2e7d32',
      contrastText: '#ffffff'
    },
    grey: {
      50: '#f8f8f8', // surfaceVariant
      200: '#eaeaea', // surface
      600: '#555f7d', // outline
      800: '#2a323f', // outlineVariant
      900: '#1f242e' // onBackground, onSurface e onSurfaceVariant
    },
    background: {
      default: '#ffffff',
      paper: '#f8f8f8'
    },
    text: {
      primary: '#001c41',
      secondary: '#3f4759',
      disabled: '#888888'
    }
  },
  typography: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
})

export default theme
