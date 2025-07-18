import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'

export const ModalBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '28rem',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '1rem',
  boxShadow:
    '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
}))

export const ActionsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '1rem'
})
