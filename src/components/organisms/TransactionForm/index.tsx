import React, { useEffect, useState } from 'react'

import { Box, Stack, Typography } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

import Button from '../../atoms/Button'
import CurrencyInput from '../../molecules/CurrencyInput'
import InputField from '../../molecules/InputField'
import SelectField from '../../molecules/SelectField'
import { ActionsWrapper } from './styles'
import { TransactionFormProps } from './types'

const transactionOptions = [
  { label: 'Entrada', value: 'income' },
  { label: 'Saída', value: 'expense' }
]

const TransactionForm: React.FC<TransactionFormProps> = ({
  variant,
  initialData,
  onSubmit,
  onCancel
}) => {
  const isEditMode = variant === 'edit'
  const title = isEditMode ? 'Editar Transação' : 'Nova transação'
  const submitButtonText = isEditMode
    ? 'Salvar Alterações'
    : 'Concluir transação'

  const [type, setType] = useState('expense')
  const [amount, setAmount] = useState<string | undefined>('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (isEditMode && initialData) {
      setType(initialData.type)
      setAmount(initialData.amount)
      setDescription(initialData.description)
    }
  }, [initialData, isEditMode])

  const handleTypeChange = (event: SelectChangeEvent<unknown>) => {
    setType(event.target.value as string)
  }

  const handleAmountChange = (value: string | undefined) => {
    setAmount(value)
  }

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit({ type, amount, description })
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" component="h1" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      <Stack spacing={2}>
        <SelectField
          label="Alterar Tipo de Transação"
          value={type}
          onChange={handleTypeChange}
          options={transactionOptions}
        />
        <CurrencyInput
          label="Novo Valor"
          value={amount}
          onValueChange={handleAmountChange}
          placeholder="R$ 0,00"
        />
        <InputField
          label="Nova Descrição"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Ex: Padaria"
        />
      </Stack>

      <ActionsWrapper>
        <Button variant="info" type="submit" fullWidth>
          {submitButtonText}
        </Button>
        {isEditMode && onCancel && (
          <Button variant="neutral" onClick={onCancel} fullWidth>
            Cancelar Edição
          </Button>
        )}
      </ActionsWrapper>
    </Box>
  )
}

export default TransactionForm
