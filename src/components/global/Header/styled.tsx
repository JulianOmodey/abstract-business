import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.colors.black};
  position: sticky;
  top: 0;
  z-index: 10000;
`

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px auto;
  border-radius: 20px;
`
