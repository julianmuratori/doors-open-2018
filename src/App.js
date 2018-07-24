import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import './App.css';
import axios from 'axios';
import Welcome from './components/Welcome'
import Nav from './components/Nav'

class App extends Component {

  state = {}

  componentDidMount() {
    axios
      .get('/locations')
      .then(res => {
        if (res.status === 200) {
          const locations = res.data.payload
          this.setState({ locations })
        }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="wrapper">
         <Nav />
          <Switch>
            <Route exact path="/" component={Welcome} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
