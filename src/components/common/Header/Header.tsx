import React from 'react'
import {HeaderRoot, Navigation, Title} from "./HeaderStyles";
import {StyledButton} from "../styled/rest";
import SignBlock from "./SignBlock/SignBlock";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import AuthBlock from "./AuthBlock/AuthBlock";
import { useHistory } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

const Header = () => {

    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

    const history = useHistory();
    const toMain = () => history.push('/')

    return (
        <HeaderRoot>
            <Title>conduit</Title>
            <Navigation>
                <StyledButton startIcon={<HomeIcon/>} onClick={toMain}>Home</StyledButton>
                { !isAuth ? <SignBlock /> : <AuthBlock/> }
            </Navigation>
        </HeaderRoot>
    )
}

export default Header
