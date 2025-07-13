import { styled } from '@mui/material/styles'
import { Box, Link } from '@mui/material'

export const Container = styled(Box)`
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2.4rem 1.6rem 0;
`
export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #eaeaea;
  padding: 1.6rem 2.4rem;
  border-radius: 0.4rem;
  gap: 2.4rem;
`
export const GroupMenu = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  column-gap: 2.6rem;
`

export const StLink = styled(Link)`
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 1.6rem;
  text-decoration: none;

  &:hover {
    transition: color 0.1s linear;
    color: #a18a68;
  }
`
