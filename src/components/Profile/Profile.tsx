import React, {useEffect} from 'react'
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Articles from "../common/Articles/Articles";
import {ProfileMain} from "./ProfileStyles";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {ProfileState} from "../../store/types/profileTypes";
import {getMyArticles, setActiveTab} from "../../store/actions/articlesActions";
import {ArticlesState} from "../../store/types/articlesType";

const Profile = () => {

    const articlesState: ArticlesState = useSelector((state: RootState) => state.articles);

    const profileState: ProfileState = useSelector((state: RootState) => state.profile)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMyArticles(profileState.user.username, articlesState.offset, articlesState.limit))
        dispatch(setActiveTab(0))
    }, [])

    return (
        <>
            <Header/>
            <ProfileHeader
                username = {profileState.user.username}
                bio={profileState.user.bio}
                image={profileState.user.image}
            />
            <ProfileMain>
                <Articles articlesState={articlesState} profileState={profileState}/>
            </ProfileMain>
            <Footer/>
        </>
    )
}

export default Profile
