import React from 'react'

import { StyledButton } from './styles'

import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  children,
  colorVariant = 'info',
  ...rest
}) => {
  return (
    <StyledButton colorVariant={colorVariant} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button
