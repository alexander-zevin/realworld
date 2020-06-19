import React from 'react'
import {StyledButton, StyledLink} from "../../styled/rest";
import {ProfileState} from "../../../../store/types/profileTypes";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {useHistory} from "react-router-dom";

const AuthBlock = () => {

    const username: string = useSelector((state: RootState) => state.profile.user.username);

    const history = useHistory();
    const toEditor = () => history.push('/newArticle')
    const toSettings = () => history.push('/settings')
    const toProfiles = () => history.push(`/profiles/${username}`)

    return (
        <>
            <StyledButton onClick={toEditor}>New Article</StyledButton>
            <StyledButton onClick={toSettings}>Settings</StyledButton>
            <StyledButton onClick={toProfiles}>{username}</StyledButton>
        </>
    )
}

export default AuthBlock
