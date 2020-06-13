import React from 'react'
import {LoginDescription, LoginForm, LoginRoot, LoginTitle} from "./SignUpStyles";
import {TextField} from "@material-ui/core";
import {StyledButton} from "../common/styles";
import {SignLink} from "../SignIn/SignInStyles";

const SignUp = () => {
    return (
        <LoginRoot>
            <LoginForm>
                <LoginTitle>Sign Up</LoginTitle>
                <SignLink to="/signin">
                    <LoginDescription>Have an account?</LoginDescription>
                </SignLink>
                <TextField id='textFieldUsername' label='Username' fullWidth/>
                <TextField id='textFieldEmail' label='Email' fullWidth/>
                <TextField id='textFieldPassword' label='Password' type='password' fullWidth/>
                <StyledButton variant='contained' color='primary' size='large'>
                    Sign Up
                </StyledButton>
            </LoginForm>
        </LoginRoot>
    )
}

export default SignUp
