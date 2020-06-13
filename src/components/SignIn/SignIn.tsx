import React from 'react'
import {LoginDescription, LoginForm, LoginRoot, LoginTitle, SignLink} from "./SignInStyles";
import {TextField} from "@material-ui/core";
import {StyledButton} from "../common/styles";

const SignIn = () => {
    return (
        <LoginRoot>
            <LoginForm>
                <LoginTitle>Sign In</LoginTitle>
                <SignLink to="/signup">
                    <LoginDescription>Need an account?</LoginDescription>
                </SignLink>
                <TextField id='textFieldEmail' label='Email' fullWidth/>
                <TextField id='textFieldPassword' label='Password' type='password' fullWidth/>
                <StyledButton variant='contained' color='primary' size='large'>
                    Sign In
                </StyledButton>
            </LoginForm>
        </LoginRoot>
    )
}

export default SignIn
