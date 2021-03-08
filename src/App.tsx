import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import './App.css'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { authActions, LoadingStatusEnum } from './store/ducks/auth/auth'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'

const App = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const status = useSelector((state: RootState) => state.auth.status)

    useEffect(() => {
        dispatch(authActions.checkIsAuth())
    }, [dispatch])

    useEffect(() => {
        if (!isAuth && status === LoadingStatusEnum.SUCCESS)
            history.replace('/login')
        if (isAuth && status === LoadingStatusEnum.SUCCESS)
            history.replace('/')
    }, [history, isAuth, status])

    return (
        <div className="App">
            <Switch>
                <Route path={'/login'} component={LoginPage}/>
                <Route path={'/'} component={HomePage}/>
            </Switch>
        </div>
    )
}

export default App
