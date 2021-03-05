import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import { GlobalStyle, GlobalTheme } from './theme/theme'

ReactDOM.render(
    <Router>
        <ThemeProvider theme={GlobalTheme}>
            <GlobalStyle/>
            <App/>
        </ThemeProvider>
    </Router>,
    document.getElementById('root')
)
