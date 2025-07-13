import React from 'react'

import { StyledButton } from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = (props) => {
  const { variant, ...rest } = props

  return <StyledButton {...rest} variant="contained" customVariant={variant} />
}

export default Button
