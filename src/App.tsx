import React from 'react'
import Header from "./components/Header/Header";
import {AppRoot} from "./AppStyles";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <AppRoot>
            <Header/>
            <Main/>
            <Footer/>
        </AppRoot>
    )
}

export default App
