import { Container, GroupMenu, StLink, Wrapper } from './style'
import { Logo } from '../../atoms/Logo'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />

        <GroupMenu>
          <StLink href="/">Início</StLink>
          <StLink href="/transfers">Transferências</StLink>
          <StLink href="/investments">Investimentos</StLink>
          <StLink href="/other-services">Outros serviços</StLink>
        </GroupMenu>
      </Wrapper>
    </Container>
  )
}

export default Header
