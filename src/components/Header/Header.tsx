import React from 'react'
import {HeaderRoot, NavBtn, Navigation, Title} from "./HeaderStyles";
import {Button} from "@material-ui/core";

const Header = () => {
  return (
    <HeaderRoot>
        <Title>conduit</Title>
        <Navigation>
            <Button>Home</Button>
            <NavBtn>Home</NavBtn>
            <NavBtn>Sign in</NavBtn>
            <NavBtn>Sign up </NavBtn>
        </Navigation>
    </HeaderRoot>
  )
}

export default Header
