import { AppStateProvider } from './store' 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './teleporthq/style.css'
import ComingSoon from './teleporthq/pages/coming-soon'
import Profile from './teleporthq/pages/profile'
import Home from './teleporthq/pages/home'

const App = () => {
  return (
    <Router>
      <AppStateProvider>
        <Route exact component={ComingSoon} path="/coming-soon" />
        <Route exact component={Profile} path="/profile" />
        <Route exact component={Home} path="/" />
      </AppStateProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
