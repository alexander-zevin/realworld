import React, {useReducer} from 'react'
import {LoginDescription, LoginForm, LoginRoot, LoginTitle} from "./SignUpStyles";
import {TextField} from "@material-ui/core";
import {SignLink, StyledButton} from "../common/styles";
import {initialState, signUpReducer} from "./SignUpReducer";
import {setEmailActionCreator, setPasswordActionCreator, setUsernameActionCreator} from "./SignUpActions";

const SignUp = () => {

    const [state, dispatch] = useReducer(signUpReducer, initialState);

    return (
        <LoginRoot>
            <LoginForm>
                <LoginTitle>Sign Up</LoginTitle>
                <SignLink to="/signin">
                    <LoginDescription>Have an account?</LoginDescription>
                </SignLink>
                <TextField
                    id='textFieldUsername'
                    label='Username'
                    fullWidth
                    value={state.username}
                    onChange={(event => dispatch(setUsernameActionCreator(event.target.value)))}
                />
                <TextField
                    id='textFieldEmail'
                    label='Email'
                    fullWidth
                    value={state.email}
                    onChange={(event => dispatch(setEmailActionCreator(event.target.value)))}
                />
                <TextField
                    id='textFieldPassword'
                    label='Password'
                    type='password'
                    fullWidth
                    value={state.password}
                    onChange={(event => dispatch(setPasswordActionCreator(event.target.value)))}
                />
                <StyledButton variant='contained' color='primary' size='large'>
                    Sign Up
                </StyledButton>
            </LoginForm>
        </LoginRoot>
    )
}

export default SignUp
