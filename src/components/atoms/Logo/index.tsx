import { Img, StText, Wrapper } from './style'
import LogoSvg from '../../../assets/logo.svg'

export const Logo = () => {
  return (
    <Wrapper>
      <Img src={LogoSvg} alt="" />
      <StText>Bytebank</StText>
    </Wrapper>
  )
}

export default Logo
