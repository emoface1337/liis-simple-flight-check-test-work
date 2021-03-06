import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'

import { GlobalStyle, GlobalTheme } from './theme/theme'
import store from './store'

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ThemeProvider theme={GlobalTheme}>
                <GlobalStyle/>
                <App/>
            </ThemeProvider>
        </Provider>
    </Router>,
    document.getElementById('root')
)
