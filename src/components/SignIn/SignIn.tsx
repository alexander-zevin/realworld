import React, {useReducer} from 'react'
import {LoginDescription, LoginForm, LoginRoot, LoginTitle} from "./SignInStyles";
import {TextField} from "@material-ui/core";
import {SignLink, StyledButton} from "../common/styles";
import {initialState, signInReducer} from "./SignInReducer";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {setEmailActionCreator, setPasswordActionCreator} from "./SignInActions";
import {setToken, usersAPI} from "../../api/api";
import {setProfileActionCreator} from "../../store/actions/profileActions";
import {setAuthActionCreator, setAuthErrorActionCreator} from "../../store/actions/authActions";
import {IAuthState} from "../../store/types/authTypes";
import {RootStateType} from "../../store/store";
import {Alert} from "@material-ui/lab";
import {getTokenLocalStorage, setTokenLocalStorage} from "../../lib/localStorage";

const SignIn = () => {

    const dispatchRedux = useDispatch()

    const [state, dispatch] = useReducer(signInReducer, initialState);

    const authState: IAuthState = useSelector((state: RootStateType) => state.auth);

    const history = useHistory();

    const signIn = async () => {
        try {
            const response = await usersAPI.signIn(state.email, state.password)
            setToken(response.data.user.token)
            setTokenLocalStorage(response.data.user.token)
            dispatchRedux(setProfileActionCreator(response.data.user))
            dispatchRedux(setAuthErrorActionCreator(null, null))
            dispatchRedux(setAuthActionCreator(true))
            history.push("/");
            console.log(response.data)
        } catch (err) {
            dispatchRedux(setAuthErrorActionCreator(err.name, err.message))
        }
    }

    return (
        <LoginRoot>
            <LoginForm>
                <LoginTitle>Sign In</LoginTitle>
                <SignLink to="/signup">
                    <LoginDescription>Need an account?</LoginDescription>
                </SignLink>
                <TextField
                    id='textFieldEmail'
                    label='Email'
                    fullWidth
                    value={state.email}
                    onChange={event => dispatch(setEmailActionCreator(event.target.value))}
                />
                <TextField
                    id='textFieldPassword'
                    label='Password'
                    type='password'
                    fullWidth
                    value={state.password}
                    onChange={event => dispatch(setPasswordActionCreator(event.target.value))}
                />
                {
                    authState.error.message &&
                    <Alert severity="error">{authState.error.message}</Alert>
                }
                <StyledButton
                    variant='contained'
                    color='primary'
                    size='large'
                    onClick={() => signIn()}
                >
                    Sign In
                </StyledButton>
            </LoginForm>
        </LoginRoot>
    )
}

export default SignIn
