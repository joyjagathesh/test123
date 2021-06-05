import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sndpage from './2ndpage'
import Home from './enterkey'
import history from './history'



export default class navigation extends Component {
    render() {
    return(
        <Router history={history}>
          <div>
                <Route exact path ="/"> <Home /></Route>
                <Route path = "/and"> <Sndpage /></Route>
                </div>
        </Router>
    )
}
}


