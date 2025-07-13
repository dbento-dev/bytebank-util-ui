import { Stack, Typography, useTheme } from '@mui/material'
import Button from './components/atoms/Button'
export const App = () => {
  const theme = useTheme()
  return (
    <>
      <Typography variant="h4" color={theme.palette.primary.light}>
        Componentes
      </Typography>
      <Stack spacing={2} direction="row" sx={{ padding: 4 }}>
        <Button variant="info">Botão de Informação</Button>
        <Button variant="error" onClick={() => alert('Erro!')}>
          Botão de Erro
        </Button>
        <Button variant="neutral">Botão Neutro</Button>
        <Button variant="neutral" disabled>
          Botão Desabilitado
        </Button>
      </Stack>
    </>
  )
}
