import './App.css';

import React, { Component } from 'react'
import Nav from './containers/Nav'
import Main from './containers/Main'
import Footer from './containers/Footer'

export default class App extends Component {

  state = {
    dashboard: {
      greetings: [],
      images: [],
      quotes: []
    },
    weather: {
      temperature: '25C',
      location: 'Denver'
    },
    image: {}
  }

  sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  setBackgroundImage = () => {
    let image = this.sample(this.state.dashboard.images)
    document.body.style.backgroundImage = `url(${image.url})`
    this.setState({
      image: image
    })
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/greetings')
    .then(resp => resp.json())
    .then(results => this.setState({
      dashboard: results
    }))
    .then(this.setBackgroundImage)
  }


  // setCurrentWeather = () => {
  //   fetch('https://api.darksky.net/forecast/ebdae7afd91ae1fdd3f0a28b1d73d16f/39.7392/104.9903')
  //   .then(resp => resp.json())
  //   .then(console.log)
  // }

  

  render() {
    return (
      <main className="App">
        <Nav weather={this.state.weather} />
        <Main 
          greetings={this.state.dashboard.greetings}
          sample={this.sample}
        />
        <Footer image={this.state.image}
          quotes={this.state.dashboard.quotes}
          sample={this.sample} 
        />
      </main>
    )
  }
}

