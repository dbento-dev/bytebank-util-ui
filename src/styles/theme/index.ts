// export const Colors = {
//   white: '#ffffff',
//   black: '#000000',
//   transparent: 'transparent',

//   gray: {
//     50: '#f8f8f8', // surfaceVariant
//     100: '#f1f1f1',
//     200: '#eaeaea', // surface
//     300: '#dcdcdc',
//     400: '#a9a9a9',
//     500: '#888888',
//     600: '#555f7d', // outline
//     700: '#3f4759',
//     800: '#2a323f', // outlineVariant
//     900: '#1f242e', // onBackground, onSurface e onSurfaceVariant
//     950: '#14181f'
//   },

//   red: {
//     50: '#fef2f2',
//     100: '#fee2e2',
//     200: '#fecaca',
//     300: '#fca5a5',
//     400: '#f87171',
//     500: '#ef4444', // primaryContainer e errorContainer
//     600: '#d23a3c', // primary
//     700: '#b91c1c', // error
//     800: '#991b1b',
//     900: '#7f1d1d',
//     950: '#450a0a'
//   },

//   blue: {
//     50: '#eff6ff',
//     100: '#dbeafe',
//     200: '#bfdbfe',
//     300: '#93c5fd', // infoContainer
//     400: '#60a5fa',
//     500: '#3b82f6',
//     600: '#2d68fd', // info
//     700: '#2450c0',
//     800: '#1e40af',
//     900: '#1e3a8a',
//     950: '#172554'
//   },

//   green: {
//     50: '#f0fdf4',
//     100: '#dcfce7',
//     200: '#bbf7d0',
//     300: '#86efac',
//     400: '#4ade80',
//     500: '#22c55e',
//     600: '#2e7d32', // success
//     700: '#15803d',
//     800: '#166534',
//     900: '#14532d', // successContainer
//     950: '#052e16'
//   },

//   yellow: {
//     50: '#fefce8',
//     100: '#fef9c3',
//     200: '#fde68a',
//     300: '#fdd835', // warningContainer
//     400: '#facc15',
//     500: '#eab308',
//     600: '#ce9c07', // warning
//     700: '#b45309',
//     800: '#92400e',
//     900: '#78350f',
//     950: '#451a03'
//   }
// }

import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    // mode: 'light',
    primary: {
      main: 'blue', // blue-500
      light: 'yellow', // blue-400
      dark: 'red', // blue-600
      contrastText: '#ffffff' // white
    },
    secondary: {
      main: '#22c55e', // green-500
      light: '#4ade80', // green-400
      dark: '#2e7d32', // green-600
      contrastText: '#ffffff' // white
    },
    error: {
      main: '#ef4444', // red-500
      light: '#f87171', // red-400
      dark: '#d23a3c', // red-600
      contrastText: '#ffffff' // white
    },
    warning: {
      main: '#eab308', // yellow-500
      light: '#facc15', // yellow-400
      dark: '#ce9c07', // yellow-600
      contrastText: '#ffffff' // white
    },
    info: {
      main: '#3b82f6', // blue-500
      light: '#60a5fa', // blue-400
      dark: '#2d68fd', // blue-600
      contrastText: '#ffffff' // white
    },
    success: {
      main: '#22c55e', // green-500
      light: '#4ade80', // green-400
      dark: '#2e7d32', // green-600
      contrastText: '#ffffff' // white
    },
    background: {
      default: '#ffffff', // white
      paper: '#f8f8f8' // gray-50
    },
    text: {
      primary: '#1f242e', // gray-900
      secondary: '#3f4759', // gray-700
      disabled: '#888888' // gray-500
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
})

export default theme
