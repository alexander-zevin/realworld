import React, {useEffect, useReducer} from 'react'
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import {LogoutButton, SettingsButton, SettingsMain, SettingsTitle} from "./SettingsStyles";
import {TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {initialState, settingsReducer} from "./SettingsReducer";
import {ProfileState} from "../../store/types/profileTypes";
import {setBio, setEmail, setImage, setPassword, setSettingsState, setUsername} from "./SettingsActions";
import {MultilineTextField} from "../common/styled/rest";
import {usersAPI} from "../../api/api";
import {setProfile} from "../../store/actions/profileActions";
import {useHistory} from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import {setAuth} from "../../store/actions/authActions";

const Settings = () => {

    const dispatchRedux = useDispatch()

    const history = useHistory();

    const profile: ProfileState = useSelector((state: RootState) => state.profile)

    const [state, dispatch] = useReducer(settingsReducer, initialState);

    useEffect(() => {
        dispatch(setSettingsState(profile))
    }, [profile])

    const updateUser = () => {
        usersAPI.updateUser(state)
            .then(res => {
                dispatchRedux(setProfile(res.data.user))
                history.push("/");
            })
            .catch(err => console.log(err))
            .then(() => history.push("/"))
    }

    const logout = () => {
        localStorage.clear()
        dispatchRedux(setAuth(false))
        history.push("/")
    }

    return (
        <>
            <Header/>
            <SettingsMain>
                <SettingsTitle>
                    Your Settings
                </SettingsTitle>
                <TextField
                    label='URL of profile picture'
                    fullWidth
                    size='medium'
                    variant="outlined"
                    margin='normal'
                    value={state.image}
                    onChange={event => dispatch(setImage(event.target.value))}
                />
                <TextField
                    label='username'
                    fullWidth
                    size='medium'
                    variant="outlined"
                    margin='normal'
                    value={state.username}
                    onChange={event => dispatch(setUsername(event.target.value))}
                />
                <MultilineTextField
                    label='bio'
                    value={state.bio}
                    onChange={event => dispatch(setBio(event.target.value))}
                />
                <TextField
                    type='email'
                    label='email'
                    fullWidth
                    size='medium'
                    variant="outlined"
                    margin='normal'
                    value={state.email}
                    onChange={event => dispatch(setEmail(event.target.value))}
                />
                <TextField
                    type='password'
                    label='password'
                    fullWidth
                    size='medium'
                    variant="outlined"
                    margin='normal'
                    value={state.password}
                    onChange={event => dispatch(setPassword(event.target.value))}
                />
                <SettingsButton onClick={() => updateUser()}>
                    Update Settings
                </SettingsButton>
                <Divider/>
                <LogoutButton onClick={logout}>
                    Or click here to logout
                </LogoutButton>
            </SettingsMain>
            <Footer/>
        </>
    )
}

export default Settings