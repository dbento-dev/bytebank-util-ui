import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import {
  Button,
  IconButton,
  InputField,
  SelectField,
  WelcomeHeader
} from './components'
import CurrencyInputField from './components/molecules/CurrencyInput'

export const App = () => {
  const [tipo, setTipo] = useState('')

  const opcoesDeTipo = [
    { value: 'entrada', label: 'Entrada' },
    { value: 'saida', label: 'Saída' }
  ]

  const [descricao, setDescricao] = useState('')

  const [valor, setValor] = useState<string | undefined>()

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
        <Box sx={{ mb: '2rem' }}>
          <WelcomeHeader
            userName="Alice"
            welcomeMessage="Bem vinda de volta!"
            dateString="Quinta-feira, 08/09/2024"
          />
        </Box>

        <Box sx={{ mb: '2rem' }}>
          <Typography variant="h5" component="h2" sx={{ mb: '1.5rem' }}>
            Demonstração do Componente: Button
          </Typography>

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

        <Box component="form" sx={{ mb: '2rem', width: '400px' }}>
          <Typography variant="h5" component="h2" sx={{ mb: '1.5rem' }}>
            Demonstração do Componente: InputField
          </Typography>

          <Stack spacing={2}>
            <SelectField
              id="tipo-transacao"
              label="Tipo de transação"
              placeholder="Selecione o tipo de transação"
              options={opcoesDeTipo}
              value={tipo}
              onChange={(e) => setTipo(e.target.value as string)}
            />

            <InputField
              id="descricao-transacao"
              label="Descrição"
              placeholder="Ex: Pagamento de conta"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <CurrencyInputField
              id="valor-transacao"
              label="Valor"
              placeholder="R$ 0,00"
              value={valor}
              onValueChange={(value) => setValor(value)}
            />

            <Button colorVariant="info" sx={{ mt: 2 }}>
              Salvar
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
