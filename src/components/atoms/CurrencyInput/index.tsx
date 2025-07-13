import { Box } from '@mui/material'
import React from 'react'
import CurrencyInputField from 'react-currency-input-field'
import { StyledLabel } from '../Label/styles'
import { StyledTextField } from './styles'
import { CurrencyInputProps } from './types'

const CurrencyInput: React.FC<CurrencyInputProps> = (props) => {
  const { label, ...rest } = props
  const inputId = React.useId()

  return (
    <Box sx={{ width: '100%' }}>
      <StyledLabel htmlFor={inputId}>{label}</StyledLabel>

      <CurrencyInputField
        {...rest}
        id={inputId}
        name={inputId}
        customInput={StyledTextField}
        prefix="R$ "
        decimalSeparator=","
        groupSeparator="."
        decimalsLimit={2}
      />
    </Box>
  )
}

export default CurrencyInput
