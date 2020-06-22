import React, {FC} from 'react'
import {Ava, Bio, EditButton, ProfileHeaderRoot, TitleName} from './ProfileHeaderStyles'
import {ProfileHeaderProps} from "./ProfileHeaderTypes";
import { useHistory } from "react-router-dom";

const ProfileHeader: FC<ProfileHeaderProps> = ({username, bio, image}) => {

    const history = useHistory();

    const toSettings = () => history.push('/settings')

    return (
        <ProfileHeaderRoot>
            <Ava src={image}>H</Ava>
            <TitleName>{username}</TitleName>
            <Bio>{bio}</Bio>
            <EditButton onClick={toSettings}>
                Edit profile settings
            </EditButton>
        </ProfileHeaderRoot>
    )
}

export default ProfileHeader
