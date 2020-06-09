import React from 'react'
import Header from "./components/Header/Header";
import {AppRoot, CentralBox} from "./AppStyles";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <AppRoot>
        <CentralBox>
            <Header/>
            <Main/>
        </CentralBox>
        <Footer/>
    </AppRoot>
  )
}

export default App
