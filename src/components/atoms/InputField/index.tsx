import { Box } from '@mui/material'
import React from 'react'
import { InputLabel, StyledTextField } from './styles'
import { InputFieldProps } from './types'

const InputField: React.FC<InputFieldProps> = (props) => {
  const { label, ...rest } = props

  const inputId = React.useId()

  return (
    <Box sx={{ width: '100%' }}>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>

      <StyledTextField {...rest} id={inputId} variant="outlined" fullWidth />
    </Box>
  )
}

export default InputField
