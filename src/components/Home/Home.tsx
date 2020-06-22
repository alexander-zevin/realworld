import React, {useEffect} from 'react'
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import {HomeMain} from "./HomeStyles";
import Articles from "../common/Articles/Articles";
import Tags from "../common/Tags/Tags";
import {useDispatch, useSelector} from "react-redux";
import {getGlobalArticles, setActiveTab} from "../../store/actions/articlesActions";
import {ProfileState} from "../../store/types/profileTypes";
import {RootState} from "../../store/store";
import {ArticlesState} from "../../store/types/articlesType";

const Home = () => {

		const articleState: ArticlesState = useSelector((state: RootState) => state.articles)

		const dispatch = useDispatch()

		useEffect(() => {
				dispatch(getGlobalArticles(articleState.offset, articleState.limit))
				dispatch(setActiveTab(1))
		}, [])

		return (
				<>
						<Header/>
						<HomeMain>
								<Articles/>
								<Tags/>
						</HomeMain>
						<Footer/>
				</>
		)
}

export default Home