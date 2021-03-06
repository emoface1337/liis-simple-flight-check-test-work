import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const App = () => {
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
