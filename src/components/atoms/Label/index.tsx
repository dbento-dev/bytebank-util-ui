import React from 'react'

import { StyledLabel } from './styles'

import { LabelProps } from './types'

const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>
}

export default Label
