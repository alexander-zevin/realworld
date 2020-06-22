import React, {useEffect} from 'react'
import {AppRoot} from "./AppStyles";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {getTokenLocalStorage} from "./lib/localStorage";
import {setToken, usersAPI} from "./api/api";
import {useDispatch, useSelector} from "react-redux";
import {setProfile} from "./store/actions/profileActions";
import {setAuth, setAuthError} from "./store/actions/authActions";
import {RootState} from "./store/store";
import Progress from "./components/common/Progress";
import {initializedSuccess} from "./store/actions/appActions";
import {FullScreenBox} from "./components/common/styled/rest";
import Home from "./components/Home/Home";
import NewArticle from "./components/NewArticle/NewArticle";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

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
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path='/newArticle'>
                        <NewArticle/>
                    </Route>
                    <Route path='/signin'>
                        <SignIn/>
                    </Route>
                    <Route path='/signup'>
                        <SignUp/>
                    </Route>
                    <Route path='/article/:slug'>
                        <ArticlePage/>
                    </Route>
                    <Route path='/profiles/:username'>
                        <Profile/>
                    </Route>
                    <Route path='/settings'>
                        <Settings/>
                    </Route>
                </Switch>
            </Router>
        </AppRoot>
    )
}

export default App
