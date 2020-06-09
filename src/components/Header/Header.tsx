import React from 'react'
import {HeaderRoot, NavBtn, Navigation, Title} from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderRoot>
        <Title>conduit</Title>
        <Navigation>
            <NavBtn>Home</NavBtn>
            <NavBtn>Sign in</NavBtn>
            <NavBtn>Sign up </NavBtn>
        </Navigation>
    </HeaderRoot>
  )
}

export default Header
