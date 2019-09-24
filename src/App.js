import './App.css';

import React, { Component } from 'react'
import Nav from './containers/Nav'
import Main from './containers/Main'
import Footer from './containers/Footer'

export default class App extends Component {

  state = {
    Dashboards: [{
      greetings: ['greetings'],
      quotes: ['hello world'],
      image: {
        image_url: 'https://images.unsplash.com/photo-1569271532860-dd35503aaf1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        photographer: 'you',
        location: 'your moms house'
      }
    }],
    dashboard: {
      greetings: ['greetings'],
      quotes: ['hello world'],
      image: {
        image_url: 'https://images.unsplash.com/photo-1569271532860-dd35503aaf1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        photographer: 'you',
        location: 'your moms house'
      }
    }
  }

  componentDidMount = () => {
    // fetch('http://localhost:3000')
    // .then(resp => resp.json())
    //   .then(res => this.setState({
    //     Dashboards: res
    //   })) .then()  MAKE SURE YOU GRAB A SAMPLE OF THE RESULTS*********************
    // this.setState({
    //   Dashboard: 
    // })
  }

  render() {
    return (
      <main className="App">
        <Nav  />
        <Main 
          greetings={this.state.dashboard.greetings}
        />
        <Footer photo={this.state.dashboard.photo}
          quotes={this.state.dashboard.quotes} 
        />
      </main>
    )
  }
}

