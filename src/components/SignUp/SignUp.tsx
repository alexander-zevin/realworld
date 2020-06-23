import React, {useReducer} from 'react'
import {initialState, signUpReducer} from "./SignUpReducer";
import {
    setEmail,
    setError,
    setPassword, setProgress,
    setUsername
} from "./SignUpActions";
import {setToken, usersAPI} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {setProfile} from "../../store/actions/profileActions";
import {useHistory} from "react-router-dom";
import {setAuth} from "../../store/actions/authActions";
import {setTokenLocalStorage} from "../../lib/localStorage";
import {SignDescription, SignForm, SignInput, SignRoot, SignTitle, Error, SignButton} from "../common/styled/sign";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import CircularProgress from "@material-ui/core/CircularProgress";

const SignUp = () => {

    const dispatchRedux = useDispatch()

    const [state, dispatch] = useReducer(signUpReducer, initialState);

    const history = useHistory();

    const signUp = () => {
        dispatch(setProgress(true))
        usersAPI.signUp(state.username, state.email, state.password)
            .then(res => {
                setToken(res.data.user.token)
                setTokenLocalStorage(res.data.user.token)
                dispatchRedux(setProfile(res.data.user))
                dispatchRedux(setAuth(true))
                history.push("/");
            })
            .catch(err => {
                console.log(err.response.data.errors)
                dispatch(setError(err.response.data.errors.email))
            })
            .then(() => dispatch(setProgress(false)))
    }

    return (
        <>
            <Header/>
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
                        onChange={(event => dispatch(setUsername(event.target.value)))}
                    />
                    <SignInput
                        error={!!state.error}
                        id='textFieldEmail'
                        label='Email'
                        value={state.email}
                        onChange={(event => dispatch(setEmail(event.target.value)))}
                    />
                    <SignInput
                        id='textFieldPassword'
                        label='Password'
                        type='password'
                        value={state.password}
                        onChange={(event => dispatch(setPassword(event.target.value)))}
                    />
                    {
                        state.error &&
                        <Error>Email {state.error}</Error>
                    }
                    <SignButton onClick={() => signUp()}>
                        {
                            !state.isProgress ? 'Sign Un' : <CircularProgress size={25} color='inherit'/>
                        }
                    </SignButton>
                </SignForm>
            </SignRoot>
            <Footer/>
        </>
    )
}

export default SignUp
