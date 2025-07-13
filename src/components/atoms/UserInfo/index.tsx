import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { UserInfoWrapper } from './styles'
import { UserInfoProps } from './types'

const UserInfo: React.FC<UserInfoProps> = ({
  avatarUrl,
  userName,
  accountType
}) => {
  return (
    <UserInfoWrapper>
      <Avatar src={avatarUrl} alt={userName} />

      <Box>
        <Typography variant="body1" fontWeight="bold">
          {userName}
        </Typography>

        <Typography variant="body2">{accountType}</Typography>
      </Box>
    </UserInfoWrapper>
  )
}

export default UserInfo
