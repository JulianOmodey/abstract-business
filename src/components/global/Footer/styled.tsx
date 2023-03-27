import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  min-height: 100px;
  justify-content: center;
  text-align: center;
`

export const Disclaimer = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`
