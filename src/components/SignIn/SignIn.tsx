import React, {useReducer} from 'react'
import {initialState, signInReducer} from "./SignInReducer";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {setEmail, setError, setPassword} from "./SignInActions";
import {setToken, usersAPI} from "../../api/api";
import {setProfile} from "../../store/actions/profileActions";
import {setAuth} from "../../store/actions/authActions";
import {setTokenLocalStorage} from "../../lib/localStorage";
import {SignDescription, SignForm, SignInput, SignRoot, SignTitle, Error, SignButton} from "../common/styled/sign";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

const SignIn = () => {

    const dispatchRedux = useDispatch()

    const [state, dispatch] = useReducer(signInReducer, initialState);

    const history = useHistory();

    const signIn = () => {

        usersAPI.signIn(state.email, state.password)
            .then(response => {
                setToken(response.data.user.token)
                setTokenLocalStorage(response.data.user.token)
                dispatchRedux(setProfile(response.data.user))
                dispatchRedux(setAuth(true))
                history.push("/");
            })
            .catch(error => {
                dispatch(setError(error.response.data.errors['email or password']))
            })
    }

    return (
        <>
            <Header/>
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
                        onChange={event => dispatch(setEmail(event.target.value))}
                    />
                    <SignInput
                        id='textFieldPassword'
                        label='Password'
                        type='password'
                        value={state.password}
                        onChange={event => dispatch(setPassword(event.target.value))}
                    />
                    {
                        state.error &&
                        <Error>Email or password {state.error}</Error>
                    }
                    <SignButton onClick={signIn}>
                        Sign In
                    </SignButton>
                </SignForm>
            </SignRoot>
            <Footer/>
        </>
    )
}

export default SignIn
