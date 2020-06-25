import React, {useEffect} from 'react'
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import {HomeMain} from "./HomeStyles";
import Articles from "../common/Articles/Articles";
import Tags from "../common/Tags/Tags";
import {useDispatch, useSelector} from "react-redux";
import {getGlobalArticles, setActiveTab} from "../../store/actions/articlesActions";
import {RootState} from "../../store/store";
import {ArticlesState} from "../../store/types/articlesType";
import {ProfileState} from "../../store/types/profileTypes";

const Home = () => {

		const dispatch = useDispatch()

		const articlesState: ArticlesState = useSelector((state: RootState) => state.articles)

		const profileState: ProfileState = useSelector((state: RootState) => state.profile)

		useEffect(() => {
				dispatch(getGlobalArticles(articlesState.offset, articlesState.limit))
				dispatch(setActiveTab(1))
		}, [])

		return (
				<>
						<Header/>
						<HomeMain>
								<Articles articlesState={articlesState} profileState={profileState}/>
								<Tags/>
						</HomeMain>
						<Footer/>
				</>
		)
}

export default Home