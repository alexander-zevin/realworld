import React, {useReducer} from 'react'
import {LoginDescription, LoginForm, LoginRoot, LoginTitle} from "./SignUpStyles";
import {TextField} from "@material-ui/core";
import {SignLink, StyledButton} from "../common/styles";
import {initialState, signUpReducer} from "./SignUpReducer";
import {setEmailActionCreator, setPasswordActionCreator, setUsernameActionCreator} from "./SignUpActions";
import {usersAPI} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {setProfileActionCreator} from "../../store/actions/profileActions";
import {useHistory} from "react-router-dom";
import { Alert } from '@material-ui/lab';
import {RootStateType} from "../../store/store";
import {IAuthState} from "../../store/types/authTypes";
import {setAuthActionCreator, setAuthErrorActionCreator} from "../../store/actions/authActions";


const SignUp = () => {

    const dispatchRedux = useDispatch()

    const authState: IAuthState = useSelector((state: RootStateType) => state.auth);

    const [state, dispatch] = useReducer(signUpReducer, initialState);

    const history = useHistory();

    const signUp = async () => {
        try {
            const response = await usersAPI.signUp(state.username, state.email, state.password);
            console.log(response.data) //Где ошибка?
            dispatchRedux(setProfileActionCreator(response.data.user))
            dispatchRedux(setAuthErrorActionCreator(null, null))
            dispatchRedux(setAuthActionCreator(true))
            history.push("/");
        } catch (err) {
            dispatchRedux(setAuthErrorActionCreator(err.name, err.message))
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
                {
                    authState.error.message &&
                        <Alert severity="error">{authState.error.message}</Alert>
                }
                <StyledButton
                    variant='contained'
                    color='primary'
                    size='large'
                    onClick={() => signUp()}
                >
                    Sign Up
                </StyledButton>
            </LoginForm>
        </LoginRoot>
    )
}

export default SignUp
