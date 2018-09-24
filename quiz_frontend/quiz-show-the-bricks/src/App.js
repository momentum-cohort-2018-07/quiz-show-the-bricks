import React, { Component } from 'react'
import Login from './Login'
import Registration from './Registration'
import 'bulma/css/bulma.css'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }
    // const username = window.localStorage.getItem('username')
    // const token = window.localStorage.getItem('token')
    // if (username && token) {
    //   this.state.currentUser = { username, token }
    // // this.setState(state => ({token: 'token'})
    // }
    this.setCurrentUser = this.setCurrentUser.bind(this)
    // // this.logout = this.logout.bind(this)
  }

  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    // set token here?
    this.setState(state => ({ currentUser: user }))
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
          <h1 className='App-title'><strong>The Bricks</strong></h1>
        </header>
        <div>
          <Login setCurrentUser={this.setCurrentUser} />
          <Registration setCurrentUser={this.setCurrentUser} />
        </div>
      </div>
    )
  }
}

export default App
