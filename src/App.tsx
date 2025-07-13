import { Box, Stack } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import Button from './components/atoms/Button'
import CurrencyInput from './components/atoms/CurrencyInput'
import IconButton from './components/atoms/IconButton'
import InputField from './components/atoms/InputField'
import SelectField from './components/atoms/SelectField'
import UserInfo from './components/atoms/UserInfo'
import WelcomeHeader from './components/atoms/WelcomeHeader'

export const App = () => {
  // Imagem p/ avatar
  const userImage = 'https://i.pravatar.cc/150?u=alice'

  // InputField
  const [description, setDescription] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  // CurrencyInput
  const [value, setValue] = useState<string | undefined>('')
  const handleValueChange = (newValue: string | undefined) => {
    setValue(newValue)
  }

  // SelectField
  const transactionOptions = [
    { label: 'Entrada', value: 'income' },
    { label: 'Saída', value: 'expense' }
  ]
  const [transactionType, setTransactionType] = useState('expense')
  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    setTransactionType(event.target.value as string)
  }

  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ paddingTop: 2, maxWidth: 800 }}>
          <WelcomeHeader userName="Alice Silva" />
        </Box>

        <Box sx={{ paddingTop: 2, maxWidth: 400 }}>
          <UserInfo
            userName="Alice Silva"
            accountType="Conta corrente"
            avatarUrl={userImage}
          />
        </Box>

        <Stack spacing={2} direction="row" sx={{ paddingTop: 2 }}>
          <Button variant="info">Info</Button>
          <Button variant="error">Error</Button>
          <Button variant="neutral">Neutral</Button>
          <Button variant="neutral" disabled>
            Desabilitado
          </Button>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ paddingTop: 2 }}>
          <IconButton variant="delete" aria-label="Deletar item" />
          <IconButton variant="edit" aria-label="Editar item" />
        </Stack>

        <Box sx={{ paddingTop: 2, width: 400 }}>
          <InputField
            label="Teste"
            value={description}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ paddingTop: 2, width: 400 }}>
          <CurrencyInput
            label="Teste"
            value={value}
            onValueChange={handleValueChange}
            placeholder="R$ 0,00"
          />
        </Box>

        <Box sx={{ paddingTop: 2, width: 400 }}>
          <SelectField
            label="Teste"
            options={transactionOptions}
            value={transactionType}
            onChange={handleSelectChange}
            fullWidth
          />
        </Box>
      </Box>
    </>
  )
}
