// ui/src/components/molecules/CurrencyInputField/index.tsx

import React from 'react'
import { CurrencyInputFieldContainer, StyledCurrencyInput } from './styles'
import { CurrencyInputFieldProps } from './types'

// Importando nosso átomo Label
import Label from '../../atoms/Label'

/**
 * CurrencyInputField é uma molécula para entrada de valores monetários
 * com formatação automática para a moeda brasileira (BRL).
 */
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
        // Configurações padrão para a moeda brasileira
        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
        prefix="R$ "
        decimalSeparator=","
        groupSeparator="."
        // Permite que o valor seja nulo se o campo estiver vazio
        allowDecimals
        decimalsLimit={2}
        // Passa adiante quaisquer outras props (value, onValueChange, placeholder, etc.)
        {...rest}
      />
    </CurrencyInputFieldContainer>
  )
}

export default CurrencyInputField
