import styled from "@emotion/styled"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Img = styled.img`
  width: 3rem;
  height: 3.8rem;

  @media only screen and (min-width: 1024px) {
    width: 6.4rem;
    height: 7.8rem;
  }
`

export const StText = styled.span`
  color: #001c41;
  font-size: 1.8rem;
  font-weight: 500;

  @media only screen and (min-width: 1024px) {
    font-size: 3.6rem;
  }
`
