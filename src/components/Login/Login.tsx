import React from 'react'
import {LoginForm, LoginRoot, LoginTitle} from "./LoginStyles";
import {TextField} from "@material-ui/core";
import {StyledButton} from "../common/styles";

const Login = () => {
    return (
        <LoginRoot>
            <LoginForm>
                <LoginTitle>Log Out</LoginTitle>
                <TextField id='textFieldUsername' label='Username' fullWidth/>
                <TextField id='textFieldEmail' label='Email' fullWidth/>
                <TextField id='textFieldPassword' label='Password' type='password' fullWidth/>
                <StyledButton variant='contained' color='primary' size='large'>
                    Log Out
                </StyledButton>
            </LoginForm>
        </LoginRoot>
    )
}

export default Login
