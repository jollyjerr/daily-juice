import './App.css';

import React, { Component } from 'react'
import Nav from './containers/Nav'
import Main from './containers/Main'
import Footer from './containers/Footer'

export default class App extends Component {

  state = {
    dashboard: {
      greetings: ['greetings'],
      quotes: ['hello world'],
      image: {
        image_url: 'https://images.unsplash.com/photo-1569271532860-dd35503aaf1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        photographer: 'you',
        location: 'your moms house'
      }
    },
    weather: {
      temperature: '25c',
      location: 'Denver'
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

  sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  render() {
    return (
      <main className="App">
        <Nav weather={this.state.weather} />
        <Main 
          greetings={this.state.dashboard.greetings}
          sample={this.sample}
        />
        <Footer image={this.state.dashboard.image}
          quotes={this.state.dashboard.quotes}
          sample={this.sample} 
        />
      </main>
    )
  }
}

