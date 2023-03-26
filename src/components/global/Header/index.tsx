import React from 'react'
import * as Styled from './styled'
import Logo from '../../../images/logo.png'

export const Header = () => {
  return (
    <Styled.Header>
      <Styled.Logo src={Logo} />
    </Styled.Header>
  )
}
