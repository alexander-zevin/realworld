import React, {useReducer} from 'react'
import {initialState, signInReducer} from "./SignInReducer";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {setEmailActionCreator, setErrorActionCreator, setPasswordActionCreator} from "./SignInActions";
import {setToken, usersAPI} from "../../api/api";
import {setProfileActionCreator} from "../../store/actions/profileActions";
import {setAuthActionCreator, setAuthErrorActionCreator} from "../../store/actions/authActions";
import {setTokenLocalStorage} from "../../lib/localStorage";
import {SignDescription, SignForm, SignInput, SignRoot, SignTitle, Error, SignButton} from "../common/styled/sign";

const SignIn = () => {

    const dispatchRedux = useDispatch()

    const [state, dispatch] = useReducer(signInReducer, initialState);

    const history = useHistory();

    const signIn = async () => {
        try {
            const response = await usersAPI.signIn(state.email, state.password)
            setToken(response.data.user.token)
            setTokenLocalStorage(response.data.user.token)
            dispatchRedux(setProfileActionCreator(response.data.user))
            dispatchRedux(setAuthErrorActionCreator(null))
            dispatchRedux(setAuthActionCreator(true))
            history.push("/");
        } catch (err) {
            dispatch(setErrorActionCreator(err.response.data.errors['email or password']))
        }
    }

    return (
        <SignRoot>
            <SignForm>
                <SignTitle>Sign In</SignTitle>
                <SignDescription onClick={() => history.push('/signup')}>
                    Need an account?
                </SignDescription>
                <SignInput
                    id='textFieldEmail'
                    label='Email'
                    value={state.email}
                    onChange={event => dispatch(setEmailActionCreator(event.target.value))}
                />
                <SignInput
                    id='textFieldPassword'
                    label='Password'
                    type='password'
                    value={state.password}
                    onChange={event => dispatch(setPasswordActionCreator(event.target.value))}
                />
                {
                    state.error &&
                    <Error>{state.error}</Error>
                }
                <SignButton onClick={signIn}>
                    Sign In
                </SignButton>
            </SignForm>
        </SignRoot>
    )
}

export default SignIn
