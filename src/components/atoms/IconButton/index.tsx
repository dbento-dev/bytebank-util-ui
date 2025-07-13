import React from 'react'
import { StyledIconButton } from './styles'
import { IconButtonProps } from './types'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const iconMap = {
  delete: <DeleteIcon />,
  edit: <EditIcon />
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { variant, ...rest } = props
  const IconToRender = iconMap[variant]

  return (
    <StyledIconButton {...rest} customVariant={variant}>
      {IconToRender}
    </StyledIconButton>
  )
}

export default IconButton
