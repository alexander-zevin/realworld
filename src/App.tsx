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
import {setProfileActionCreator} from "./store/actions/profileActions";
import {setAuthActionCreator, setAuthErrorActionCreator} from "./store/actions/authActions";
import {RootStateType} from "./store/store";
import Progress from "./components/common/Progress";
import {setInitializedSuccess} from "./store/actions/appActions";
import {FullScreenBox} from "./components/common/styles";
import Editor from "./components/Editor/Editor";

const App = () => {

    const dispatch = useDispatch()

    const initialized: boolean = useSelector((state: RootStateType) => state.app.initialized)

    useEffect(() => {
        setToken(getTokenLocalStorage())
        usersAPI.getUser()
            .then(res => {
                dispatch(setProfileActionCreator(res.data.user))
                dispatch(setAuthActionCreator(true))
            })
            .catch(err => dispatch(setAuthErrorActionCreator(err.response.data.errors.error.name)))
            .then(() => dispatch(setInitializedSuccess(true)))
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
                </Switch>
                <Footer/>
            </Router>
        </AppRoot>
    )
}

export default App
