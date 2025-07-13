import { Box, Stack, Typography, useTheme } from '@mui/material'
import Button from './components/atoms/Button'
import IconButton from './components/atoms/IconButton'
import UserInfo from './components/atoms/UserInfo'
import WelcomeHeader from './components/atoms/WelcomeHeader'
const userImage = 'https://i.pravatar.cc/150?u=alice'
export const App = () => {
  const theme = useTheme()
  return (
    <>
      <Typography variant="h4" color={theme.palette.primary.light}>
        Componentes
      </Typography>
      <Box sx={{ padding: 2 }}>
        <WelcomeHeader userName="Alice Silva" />
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

        <Stack direction="row" spacing={2}>
          <IconButton variant="delete" aria-label="Deletar item" />

          <IconButton variant="edit" aria-label="Editar item" />
        </Stack>
      </Box>

      <Box sx={{ padding: 2, maxWidth: 400 }}>
        <UserInfo
          userName="Alice Silva"
          accountType="Conta corrente"
          avatarUrl={userImage}
        />
      </Box>
    </>
  )
}
