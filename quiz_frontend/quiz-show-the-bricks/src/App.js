import React, { Component } from 'react'
import Login from './Login'

import Bulma from 'bulma/css/bulma.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }
    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    if (username && token) {
      this.state.currentUser = { username, token }
    }
    this.setCurrentUser = this.setCurrentUser.bind(this)
  }

  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({ currentUser: user })
  }

  logOut () {
  }

  render () {
    // const { currentUser } = this.state
    return (
      <Login setCurrentUser={this.setCurrentUser} />
    )
  }
}

export default App