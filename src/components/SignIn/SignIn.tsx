import React, {useReducer} from 'react'
import {LoginDescription, LoginForm, LoginRoot, LoginTitle, MarginContainer} from "./SignInStyles";
import {TextField} from "@material-ui/core";
import {SignLink, StyledButton} from "../common/styles";
import {initialState, signInReducer} from "./SignInReducer";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {setEmailActionCreator, setErrorActionCreator, setPasswordActionCreator} from "./SignInActions";
import {setToken, usersAPI} from "../../api/api";
import {setProfileActionCreator} from "../../store/actions/profileActions";
import {setAuthActionCreator, setAuthErrorActionCreator} from "../../store/actions/authActions";
import {Alert} from "@material-ui/lab";
import {setTokenLocalStorage} from "../../lib/localStorage";

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
										margin='normal'
										value={state.email}
										onChange={event => dispatch(setEmailActionCreator(event.target.value))}
								/>
								<TextField
										id='textFieldPassword'
										label='Password'
										type='password'
										margin='normal'
										fullWidth
										value={state.password}
										onChange={event => dispatch(setPasswordActionCreator(event.target.value))}
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
												onClick={() => signIn()}
										>
												Sign In
										</StyledButton>
								</MarginContainer>
						</LoginForm>
				</LoginRoot>
		)
}

export default SignIn
