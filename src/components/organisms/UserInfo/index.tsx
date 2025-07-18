import PersonIcon from '@mui/icons-material/Person'
import React from 'react'
import { StyledAvatar, UserInfoContainer, UserName } from './styles'
import { UserInfoProps } from './types'

const UserInfo = React.forwardRef<HTMLDivElement, UserInfoProps>(
  ({ name, avatarUrl, ...rest }, ref) => {
    return (
      <UserInfoContainer
        direction="row"
        alignItems="center"
        spacing={1.5}
        ref={ref}
        {...rest}
      >
        <StyledAvatar src={avatarUrl}>
          <PersonIcon />
        </StyledAvatar>
        <UserName variant="h5">{name}</UserName>
      </UserInfoContainer>
    )
  }
)

UserInfo.displayName = 'UserInfo'

export default UserInfo
