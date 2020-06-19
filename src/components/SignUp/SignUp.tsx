import React, {useReducer} from 'react'
import {initialState, signUpReducer} from "./SignUpReducer";
import {
		setEmail,
		setError,
		setPassword,
		setUsername
} from "./SignUpActions";
import {setToken, usersAPI} from "../../api/api";
import {useDispatch} from "react-redux";
import {setProfile} from "../../store/actions/profileActions";
import {useHistory} from "react-router-dom";
import {setAuth, setAuthError} from "../../store/actions/authActions";
import {setTokenLocalStorage} from "../../lib/localStorage";
import {SignDescription, SignForm, SignInput, SignRoot, SignTitle, Error, SignButton} from "../common/styled/sign";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

const SignUp = () => {

		const dispatchRedux = useDispatch()

		const [state, dispatch] = useReducer(signUpReducer, initialState);

		const history = useHistory();

		const signUp = async () => {
				try {
						const response = await usersAPI.signUp(state.username, state.email, state.password);
						setToken(response.data.user.token)
						setTokenLocalStorage(response.data.user.token)
						dispatchRedux(setProfile(response.data.user))
						dispatchRedux(setAuthError(null))
						dispatchRedux(setAuth(true))
						history.push("/");
						console.log(response.data)
				} catch (err) {
						dispatch(setError(err.response.data.errors.email))
				}
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
												<Error>{state.error}</Error>
										}
										<SignButton onClick={() => signUp()}>
												Sign Up
										</SignButton>
								</SignForm>
						</SignRoot>
						<Footer/>
				</>
		)
}

export default SignUp
