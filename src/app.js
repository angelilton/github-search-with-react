'use strict'

import React, {Component} from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Angelilton Epifanio',
        login: 'angelilton',
        photo: 'https://avatars0.githubusercontent.com/u/16200828?v=4',
        repos: 12,
        followers: 10,
        following: 20
      },
      repos: [{
        name: 'curso de js',
        link: '#'
      }],
      starred: [{
        name: 'repo',
        link: '#'
      }]
    }
  }
  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
