import React from 'react'

import { CurrencyInputFieldContainer, StyledCurrencyInput } from './styles'
import { CurrencyInputFieldProps } from './types'

import Label from '../../atoms/Label'

const CurrencyInputField: React.FC<CurrencyInputFieldProps> = ({
  id,
  label,
  ...rest
}) => {
  return (
    <CurrencyInputFieldContainer>
      <Label htmlFor={id}>{label}</Label>
      <StyledCurrencyInput
        id={id}
        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
        prefix="R$ "
        decimalSeparator=","
        groupSeparator="."
        allowDecimals
        decimalsLimit={2}
        {...rest}
      />
    </CurrencyInputFieldContainer>
  )
}

export default CurrencyInputField
