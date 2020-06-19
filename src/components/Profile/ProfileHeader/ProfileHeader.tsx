import React, {FC} from 'react'
import {AvatarCircle, EditButton, ProfileHeaderRoot, TitleName} from './ProfileHeaderStyles'
import {ProfileHeaderProps} from "./ProfileHeaderTypes";

const ProfileHeader: FC<ProfileHeaderProps> = ({username}) => {

    return (
        <ProfileHeaderRoot>
            <AvatarCircle>D</AvatarCircle>
            <TitleName>{username}</TitleName>
            <EditButton>Edit profile settings</EditButton>
        </ProfileHeaderRoot>
    )
}

export default ProfileHeader
