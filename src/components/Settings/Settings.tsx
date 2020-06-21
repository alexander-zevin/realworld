import React, {useEffect, useReducer} from 'react'
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import {SettingsMain, SettingsTitle} from "./SettingsStyles";
import {TextField} from "@material-ui/core";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {initialState, settingsReducer} from "./SettingsReducer";
import {ProfileState} from "../../store/types/profileTypes";
import {setBio, setEmail, setImage, setSettingsState, setUsername} from "./SettingsActions";

const Settings = () => {

    const profile: ProfileState = useSelector((state: RootState) => state.profile)

    const [state, dispatch] = useReducer(settingsReducer, initialState);

    useEffect(() => {
        dispatch(setSettingsState(profile))
    }, [profile])

    useEffect(() => {
        console.log(state)
    }, [state])

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
                <TextField
                    label='bio'
                    fullWidth
                    size='medium'
                    variant="outlined"
                    margin='normal'
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
            </SettingsMain>
            <Footer/>
        </>
    )
}

export default Settings