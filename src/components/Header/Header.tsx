import React from 'react'
import {HeaderRoot, Navigation, Title} from "./HeaderStyles";
import {StyledButton, StyledLink} from "../common/styles";
import SignBlock from "./SignBlock/SignBlock";
import {IAuthState} from "../../store/types/authTypes";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import AuthBlock from "./AuthBlock/AuthBlock";
import {IProfileState} from "../../store/types/profileTypes";

const Header = () => {

    const isAuth: boolean = useSelector((state: RootStateType) => state.auth.isAuth);

    return (
        <HeaderRoot>
            <Title>conduit</Title>
            <Navigation>
                <StyledLink to="/">
                    <StyledButton>Home</StyledButton>
                </StyledLink>
                { !isAuth ? <SignBlock /> : <AuthBlock/> }
            </Navigation>
        </HeaderRoot>
    )
}

export default Header
