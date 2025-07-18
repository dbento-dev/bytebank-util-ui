import React from 'react'

import Label from '../../atoms/Label'

import { InputFieldContainer, StyledOutlinedInput } from './styles'

import { InputFieldProps } from './types'

const InputField: React.FC<InputFieldProps> = ({ id, label, ...rest }) => {
  return (
    <InputFieldContainer>
      <Label htmlFor={id}>{label}</Label>
      <StyledOutlinedInput id={id} {...rest} />
    </InputFieldContainer>
  )
}

export default InputField
