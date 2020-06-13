import React from 'react'
import Header from "./components/Header/Header";
import {AppRoot} from "./AppStyles";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login/Login";

const App = () => {
    return (
        <AppRoot>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </AppRoot>
    )
}

export default App
