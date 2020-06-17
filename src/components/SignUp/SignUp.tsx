import React, {useReducer} from 'react'
import {LoginDescription, LoginForm, LoginRoot, LoginTitle, MarginContainer} from "./SignUpStyles";
import {TextField} from "@material-ui/core";
import {SignLink, StyledButton} from "../common/styles";
import {initialState, signUpReducer} from "./SignUpReducer";
import {
    setEmailActionCreator,
    setErrorActionCreator,
    setPasswordActionCreator,
    setUsernameActionCreator
} from "./SignUpActions";
import {setToken, usersAPI} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {setProfileActionCreator} from "../../store/actions/profileActions";
import {useHistory} from "react-router-dom";
import { Alert } from '@material-ui/lab';
import {setAuthActionCreator, setAuthErrorActionCreator} from "../../store/actions/authActions";
import {setTokenLocalStorage} from "../../lib/localStorage";

const SignUp = () => {

    const dispatchRedux = useDispatch()

    const [state, dispatch] = useReducer(signUpReducer, initialState);

    const history = useHistory();

    const signUp = async () => {
        try {
            const response = await usersAPI.signUp(state.username, state.email, state.password);
            setToken(response.data.user.token)
            setTokenLocalStorage(response.data.user.token)
            dispatchRedux(setProfileActionCreator(response.data.user))
            dispatchRedux(setAuthErrorActionCreator(null))
            dispatchRedux(setAuthActionCreator(true))
            history.push("/");
            console.log(response.data)
        } catch (err) {
            dispatch(setErrorActionCreator(err.response.data.errors.email))
        }
    }

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
                    margin='normal'
                    value={state.username}
                    onChange={(event => dispatch(setUsernameActionCreator(event.target.value)))}
                />
                <TextField
                    id='textFieldEmail'
                    label='Email'
                    fullWidth
                    margin='normal'
                    value={state.email}
                    onChange={(event => dispatch(setEmailActionCreator(event.target.value)))}
                />
                <TextField
                    id='textFieldPassword'
                    label='Password'
                    type='password'
                    fullWidth
                    margin='normal'
                    value={state.password}
                    onChange={(event => dispatch(setPasswordActionCreator(event.target.value)))}
                />
                {
                    state.error &&
                        <Alert severity="error">{state.error}</Alert>
                }
                <MarginContainer>
                    <StyledButton
                        variant='contained'
                        color='primary'
                        size='large'
                        onClick={() => signUp()}
                    >
                        Sign Up
                    </StyledButton>
                </MarginContainer>
            </LoginForm>
        </LoginRoot>
    )
}

export default SignUp
