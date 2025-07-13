import { Container, GroupMenu, Wrapper } from './style'
import { Logo } from '../../atoms/Logo'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <GroupMenu></GroupMenu>
      </Wrapper>
    </Container>
  )
}

export default Header
