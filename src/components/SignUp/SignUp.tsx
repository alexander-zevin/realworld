import React, {useReducer} from 'react'
import {initialState, signUpReducer} from "./SignUpReducer";
import {
    setEmailActionCreator,
    setErrorActionCreator,
    setPasswordActionCreator,
    setUsernameActionCreator
} from "./SignUpActions";
import {setToken, usersAPI} from "../../api/api";
import {useDispatch} from "react-redux";
import {setProfileActionCreator} from "../../store/actions/profileActions";
import {useHistory} from "react-router-dom";
import {setAuthActionCreator, setAuthErrorActionCreator} from "../../store/actions/authActions";
import {setTokenLocalStorage} from "../../lib/localStorage";
import {SignDescription, SignForm, SignInput, SignRoot, SignTitle, Error, SignButton} from "../common/styled/sign";

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
        <SignRoot>
            <SignForm>
                <SignTitle>Sign Up</SignTitle>
                <SignDescription onClick={() => history.push("/signin")}>
                    Have an account?
                </SignDescription>
                <SignInput
                    id='textFieldUsername'
                    label='Username'
                    value={state.username}
                    onChange={(event => dispatch(setUsernameActionCreator(event.target.value)))}
                />
                <SignInput
                    id='textFieldEmail'
                    label='Email'
                    value={state.email}
                    onChange={(event => dispatch(setEmailActionCreator(event.target.value)))}
                />
                <SignInput
                    id='textFieldPassword'
                    label='Password'
                    type='password'
                    value={state.password}
                    onChange={(event => dispatch(setPasswordActionCreator(event.target.value)))}
                />
                {
                    state.error &&
                        <Error>{state.error}</Error>
                }
                <SignButton onClick={() => signUp()}>
                    Sign Up
                </SignButton>
            </SignForm>
        </SignRoot>
    )
}

export default SignUp
