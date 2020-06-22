import React, {FC} from 'react'
import {AvatarCircle, EditButton, ProfileHeaderRoot, TitleName} from './ProfileHeaderStyles'
import {ProfileHeaderProps} from "./ProfileHeaderTypes";
import { useHistory } from "react-router-dom";

const ProfileHeader: FC<ProfileHeaderProps> = ({username}) => {

    const history = useHistory();

    const toSettings = () => history.push('/settings')

    return (
        <ProfileHeaderRoot>
            <AvatarCircle>D</AvatarCircle>
            <TitleName>{username}</TitleName>
            <EditButton onClick={toSettings}>
                Edit profile settings
            </EditButton>
        </ProfileHeaderRoot>
    )
}

export default ProfileHeader
