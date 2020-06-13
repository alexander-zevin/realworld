import React from 'react'
import {HeaderRoot, Navigation, Title} from "./HeaderStyles";
import {StyledButton, StyledLink} from "../common/styles";

const Header = () => {
    return (
        <HeaderRoot>
            <Title>conduit</Title>
            <Navigation>
                <StyledLink to="/">
                    <StyledButton>Home</StyledButton>
                </StyledLink>
                <StyledLink to="/signin">
                    <StyledButton>Sign in</StyledButton>
                </StyledLink>
                <StyledLink to="/signup">
                    <StyledButton>Sign up</StyledButton>
                </StyledLink>
            </Navigation>
        </HeaderRoot>
    )
}

export default Header
