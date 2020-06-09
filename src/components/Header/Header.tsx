import React from 'react'
import {HeaderRoot, Navigation, Title} from "./HeaderStyles";
import {StyledButton} from "../common/styles";

const Header = () => {
    return (
        <HeaderRoot>
            <Title>conduit</Title>
            <Navigation>
                <StyledButton>Home</StyledButton>
                <StyledButton>Sign in</StyledButton>
                <StyledButton>Sign up</StyledButton>
            </Navigation>
        </HeaderRoot>
    )
}

export default Header
