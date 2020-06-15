import React, {useEffect} from 'react'
import Header from "./components/Header/Header";
import {AppRoot} from "./AppStyles";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import {getTokenLocalStorage} from "./lib/localStorage";
import {setToken, usersAPI} from "./api/api";

const App = () => {

    const getUser = async () => {
        const response = await usersAPI.getUser()
    }

    useEffect(() => {
        setToken(getTokenLocalStorage())
        getUser()
    }, [])

    return (
        <AppRoot>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path="/signup">
                        <SignUp/>
                    </Route>
                    <Route path="/signin">
                        <SignIn/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </AppRoot>
    )
}

export default App
