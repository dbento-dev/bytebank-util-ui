// ui/src/components/molecules/CurrencyInputField/types.ts

import { CurrencyInputProps as ReactCurrencyInputProps } from 'react-currency-input-field'

// Estendemos as props da biblioteca e adicionamos as nossas.
export interface CurrencyInputFieldProps extends ReactCurrencyInputProps {
  /**
   * O texto a ser exibido no componente Label acima do campo.
   */
  label: string
  /**
   * O ID único para o campo, usado para ligar o Label ao Input (acessibilidade).
   */
  id: string
}
