import { useState } from 'react'

import { Box, Stack } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

import Button from './components/atoms/Button'
import IconButton from './components/atoms/IconButton'
import CurrencyInput from './components/molecules/CurrencyInput'
import InputField from './components/molecules/InputField'
import SelectField from './components/molecules/SelectField'
import AccountCard from './components/organisms/AccountCard'
import ConfirmationModal from './components/organisms/ConfirmationModal'
import TransactionForm from './components/organisms/TransactionForm'
import { TransactionFormData } from './components/organisms/TransactionForm/types'
import TransactionItem from './components/organisms/TransactionItem'
import UserInfo from './components/organisms/UserInfo'
import WelcomeHeader from './components/organisms/WelcomeHeader'

export const App = () => {
  // ConfirmationModal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const itemNameToDelete = 'Transporte'

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleConfirmDelete = () => {
    alert(`Item "${itemNameToDelete}" excluído!`)
    handleCloseModal()
  }

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

  // TransactionItem
  const mockTransactions = [
    {
      id: 1,
      variant: 'income',
      title: 'Salário',
      date: '13/07/2025',
      amount: 500.0
    },
    {
      id: 2,
      variant: 'expense',
      title: 'Padaria',
      date: '12/07/2025',
      amount: 80.0
    },
    {
      id: 3,
      variant: 'expense',
      title: 'Conta de Luz',
      date: '11/07/2025',
      amount: 150.75
    }
  ]
  const handleEdit = (id: number) => {
    alert(`Você clicou em EDITAR o item com ID: ${id}`)
  }
  const handleDelete = (id: number) => {
    alert(`Você clicou em DELETAR o item com ID: ${id}`)
  }

  // AccountCard
  const [isBalanceVisible, setIsBalanceVisible] = useState(false)
  const toggleVisibility = () => {
    setIsBalanceVisible((prevState) => !prevState)
  }

  // TransactionForm
  const handleCreateSubmit = (data: TransactionFormData) => {
    alert(`CRIANDO: ${JSON.stringify(data)}`)
  }

  const handleEditSubmit = (data: TransactionFormData) => {
    alert(`EDITANDO: ${JSON.stringify(data)}`)
  }

  const handleCancelEdit = () => {
    alert('Edição cancelada!')
  }

  const transactionToEdit = {
    type: 'expense',
    amount: '80.00',
    description: 'Padaria'
  }

  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ paddingTop: 2, maxWidth: 700 }}>
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

        <Box sx={{ paddingTop: 2, maxWidth: 700 }}>
          <Stack spacing={1.5}>
            {mockTransactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                variant={transaction.variant as 'income' | 'expense'}
                title={transaction.title}
                date={transaction.date}
                amount={transaction.amount}
                onEdit={() => handleEdit(transaction.id)}
                onDelete={() => handleDelete(transaction.id)}
              />
            ))}
          </Stack>
        </Box>

        <Box sx={{ paddingTop: 2, maxWidth: 400 }}>
          <AccountCard
            lastFourDigits="3456"
            expirationDate="12/27"
            accountType="Conta corrente"
            balance={12540.8}
            isBalanceVisible={isBalanceVisible}
            onToggleVisibility={toggleVisibility}
          />
        </Box>

        <Box sx={{ paddingTop: 2, maxWidth: 400 }}>
          <Button variant="error" onClick={handleOpenModal}>
            Deletar
          </Button>

          <ConfirmationModal
            open={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
            title="Confirmar exclusão"
            itemName={itemNameToDelete}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 4, paddingTop: 2 }}>
          <Box
            sx={{
              flex: 1,
              border: '1px solid #ddd',
              padding: 2,
              borderRadius: 2
            }}
          >
            <TransactionForm variant="create" onSubmit={handleCreateSubmit} />
          </Box>

          <Box
            sx={{
              flex: 1,
              border: '1px solid #ddd',
              padding: 2,
              borderRadius: 2
            }}
          >
            <TransactionForm
              variant="edit"
              onSubmit={handleEditSubmit}
              onCancel={handleCancelEdit}
              initialData={transactionToEdit}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}
