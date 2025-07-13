import React from 'react'
import { StyledLabel } from './styles'
import { InputLabelProps } from './types'

const InputLabel: React.FC<InputLabelProps> = (props) => {
  return <StyledLabel {...props} />
}

export default InputLabel
