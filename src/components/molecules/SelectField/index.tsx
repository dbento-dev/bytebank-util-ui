import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import {
  SelectFieldContainer,
  StyledArrowDropDownIcon,
  StyledSelect
} from './styles'
import { SelectFieldProps, SelectOption } from './types'

import Label from '../../atoms/Label'

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  options,
  placeholder,
  value,
  ...rest
}) => {
  const renderValue = (selectedValue: unknown) => {
    if (!selectedValue) {
      return <span style={{ color: '#888888' }}>{placeholder}</span>
    }
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    )
    return selectedOption ? selectedOption.label : ''
  }

  return (
    <SelectFieldContainer>
      <Label htmlFor={id}>{label}</Label>
      <StyledSelect
        id={id}
        value={value || ''}
        renderValue={placeholder ? renderValue : undefined}
        displayEmpty={!!placeholder}
        IconComponent={StyledArrowDropDownIcon}
        {...rest}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}
        {options.map((option: SelectOption) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </SelectFieldContainer>
  )
}

export default SelectField
