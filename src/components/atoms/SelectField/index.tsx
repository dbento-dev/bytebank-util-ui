import { FormControl } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import { StyledSelect } from './styles'
import { SelectFieldProps, SelectOption } from './types'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import InputLabel from '../Label'

const SelectField: React.FC<SelectFieldProps> = (props) => {
  const { label, options, value, fullWidth, ...rest } = props
  const inputId = React.useId()
  const labelId = `${inputId}-label`

  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={labelId}>{label}</InputLabel>

      <StyledSelect
        {...rest}
        labelId={labelId}
        id={inputId}
        value={value}
        IconComponent={KeyboardArrowDownIcon}
      >
        {options.map((option: SelectOption) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  )
}

export default SelectField
