import React from 'react'
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Articles from "../common/Articles/Articles";
import {ProfileMain} from "./ProfileStyles";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {ProfileState} from "../../store/types/profileTypes";

const Profile = () => {

    const profileState: ProfileState = useSelector((state: RootState) => state.profile)

    return (
        <>
            <Header/>
            <ProfileHeader username = {profileState.user.username}/>
            <ProfileMain>
                <Articles/>
            </ProfileMain>
            <Footer/>
        </>
    )
}

export default Profile
