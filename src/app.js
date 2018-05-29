'use strict'

import React, {Component} from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isRequesting: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  // função que faz o request e passa os props para o userInfo
  handleSearch (e) {
    const userName = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isRequesting: true })

      ajax().get(`https://api.github.com/users/${userName}`)
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        .always(() => this.setState({ isRequesting: false }))
    }
  }

  getRepos (type) {
    return (e) => {
      const userName = this.state.userinfo.login
      ajax().get(`https://api.github.com/users/${userName}/${type}`)
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => (
              {
                name: repo.name,
                link: repo.html_url
              })
            )
          })
        })
    }
  }

  render () {
    return <AppContent
      {...this.state}
      handleSearch={this.handleSearch}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App
