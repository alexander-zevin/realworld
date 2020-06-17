import React from 'react'
import {StyledButton} from "../../common/styled/rest";
import {useHistory} from "react-router-dom";

const SignBlock = () => {

    const history = useHistory();
    const toSignIn = () => history.push('/signin')
    const toSignUp = () => history.push('/signup')

    return (
        <>
            <StyledButton onClick={toSignIn}>Sign in</StyledButton>
            <StyledButton onClick={toSignUp}>Sign up</StyledButton>
        </>
    )
}

export default SignBlock
