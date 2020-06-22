import React, {useEffect} from 'react'
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import {HomeMain} from "./HomeStyles";
import Articles from "../common/Articles/Articles";
import Tags from "../common/Tags/Tags";
import {useDispatch} from "react-redux";
import {getGlobalArticles, setActiveTab} from "../../store/actions/articlesActions";

const Home = () => {

		const dispatch = useDispatch()

		useEffect(() => {
				dispatch(getGlobalArticles())
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