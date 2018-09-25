import React, { Component } from 'react'
import 'bulma/css/bulma.css'

import EnterSite from './EnterSite'
import QuizIndex from './QuizIndex'
import Quiz from './Quiz'
import './index.css'

// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect
// } from 'react-router-dom'

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
      this.state.token = token
    }
    this.setCurrentUser = this.setCurrentUser.bind(this)
    // this.currentUser = this.currentUser.bind(this)
    // this.logout = this.logout.bind(this)
  }

  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({ currentUser: user })
  }

  logOut () {
  }

  // logOut () {
  //   window.setCurrentUser(null)
  //   window.localStorage.clear()
  //   this.setState({
  //     currentUser: null
  //   })
  // }

  render () {
    const { currentUser } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>The Bricks</h1>
        </header>
        <div className='quiz-display'>
          {currentUser
            ? <QuizIndex currentUser={this.currentUser} />
            : <EnterSite setCurrentUser={this.setCurrentUser} currentUser={this.currentUser} />
          }
          <Quiz currentUser={this.currentUser} setCurrentUser={this.setCurrentUser} />
        </div>

      </div>

    )
  }
}

export default App
