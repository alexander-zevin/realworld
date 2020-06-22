import React, {FC} from 'react'
import {AvatarCircle, Bio, EditButton, ProfileHeaderRoot, TitleName} from './ProfileHeaderStyles'
import {ProfileHeaderProps} from "./ProfileHeaderTypes";
import { useHistory } from "react-router-dom";

const ProfileHeader: FC<ProfileHeaderProps> = ({username, bio}) => {

    const history = useHistory();

    const toSettings = () => history.push('/settings')

    return (
        <ProfileHeaderRoot>
            <AvatarCircle>D</AvatarCircle>
            <TitleName>{username}</TitleName>
            <Bio>{bio}</Bio>
            <EditButton onClick={toSettings}>
                Edit profile settings
            </EditButton>
        </ProfileHeaderRoot>
    )
}

export default ProfileHeader
