import React from 'react'

import { Box } from '@mui/material'

import { StyledLabel } from '../../atoms/Label/styles'
import { StyledTextField } from './styles'
import { InputFieldProps } from './types'

const InputField: React.FC<InputFieldProps> = (props) => {
  const { label, ...rest } = props

  const inputId = React.useId()

  return (
    <Box sx={{ width: '100%' }}>
      <StyledLabel htmlFor={inputId}>{label}</StyledLabel>

      <StyledTextField {...rest} id={inputId} variant="outlined" fullWidth />
    </Box>
  )
}

export default InputField
