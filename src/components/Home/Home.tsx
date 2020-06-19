import React from 'react'
import Header from "../common/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "../common/Footer/Footer";
import {HomeMain} from "./HomeStyles";
import Articles from "../common/Articles/Articles";
import Tags from "../common/Tags/Tags";

const Home = () => {
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