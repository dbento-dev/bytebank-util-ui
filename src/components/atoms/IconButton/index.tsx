import React from 'react'
import { StyledIconButton } from './styles'
import { IconButtonProps } from './types'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const iconMap = {
  edit: <EditIcon fontSize="small" />,
  delete: <DeleteIcon fontSize="small" />
}

const IconButton: React.FC<IconButtonProps> = ({ variant, ...rest }) => {
  return (
    <StyledIconButton variant={variant} {...rest}>
      {iconMap[variant]}
    </StyledIconButton>
  )
}

export default IconButton
