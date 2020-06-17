import React from 'react'
import {HeaderRoot, Navigation, Title} from "./HeaderStyles";
import {StyledButton, StyledLink} from "../common/styles";
import SignBlock from "./SignBlock/SignBlock";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import AuthBlock from "./AuthBlock/AuthBlock";
import { useHistory } from "react-router-dom";

const Header = () => {

    const isAuth: boolean = useSelector((state: RootStateType) => state.auth.isAuth);

    const history = useHistory();
    const toMain = () => history.push('/')

    return (
        <HeaderRoot>
            <Title>conduit</Title>
            <Navigation>
                <StyledButton onClick={toMain}>Home</StyledButton>
                { !isAuth ? <SignBlock /> : <AuthBlock/> }
            </Navigation>
        </HeaderRoot>
    )
}

export default Header
