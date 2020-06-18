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
import {useDispatch, useSelector} from "react-redux";
import {setProfile} from "./store/actions/profileActions";
import {setAuth, setAuthError} from "./store/actions/authActions";
import {RootState} from "./store/store";
import Progress from "./components/common/Progress";
import {initializedSuccess} from "./store/actions/appActions";
import {FullScreenBox} from "./components/common/styled/rest";
import Editor from "./components/Editor/Editor";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import {getGlobalArticles} from "./store/actions/articlesActions";

const App = () => {

    const dispatch = useDispatch()

    const initialized: boolean = useSelector((state: RootState) => state.app.initialized)

    useEffect(() => {
        setToken(getTokenLocalStorage())
        usersAPI.getUser()
            .then(res => {
                dispatch(setProfile(res.data.user))
                dispatch(setAuth(true))
            })
            .catch(err => dispatch(setAuthError(err.response.data.errors.error.name)))
            .then(() => {
                dispatch(initializedSuccess(true))
                dispatch(getGlobalArticles())
            })
    }, [dispatch])

    if ( !initialized ) return (
        <FullScreenBox>
            <Progress/>
        </FullScreenBox>
    )
    return (
        <AppRoot>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path='/editor'>
                        <Editor/>
                    </Route>
                    <Route path="/signup">
                        <SignUp/>
                    </Route>
                    <Route path="/signin">
                        <SignIn/>
                    </Route>
                    <Route path="/article/:slug">
                        <ArticlePage/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </AppRoot>
    )
}

export default App
