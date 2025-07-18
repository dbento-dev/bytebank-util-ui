import { Box, Stack, Typography } from '@mui/material'
import { Button, IconButton } from './components'

export const App = () => {
  const handleButton = () => {
    console.log('Teste')
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          padding: '2rem',
          backgroundColor: 'background.paper',
          borderRadius: '0.5rem'
        }}
      >
        <Typography variant="h5" component="h2" sx={{ mb: '1.5rem' }}>
          Demonstração do Componente: Button
        </Typography>

        <Box sx={{ mb: '2rem' }}>
          <Typography variant="h6" component="h3" sx={{ mb: '1rem' }}>
            Estados Ativos
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button colorVariant="info" onClick={() => handleButton()}>
              Info
            </Button>
            <Button colorVariant="error" onClick={() => handleButton()}>
              Error
            </Button>
            <Button colorVariant="neutral" onClick={() => handleButton()}>
              Neutral
            </Button>
            <Button colorVariant="info" disabled>
              Disabled
            </Button>
          </Stack>
        </Box>

        <Box sx={{ mb: '2rem' }}>
          <Typography variant="h5" component="h2" sx={{ mb: '1.5rem' }}>
            Demonstração do Componente: Button
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              variant="edit"
              onClick={() => handleButton()}
              aria-label="Editar transação"
            />
            <IconButton
              variant="delete"
              onClick={() => handleButton()}
              aria-label="Deletar transação"
            />
          </Stack>
        </Box>
      </Box>
    </>
  )
}
