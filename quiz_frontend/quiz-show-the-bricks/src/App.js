import React, { Component } from 'react'
import 'bulma/css/bulma.css'

import EnterSite from './EnterSite'
import QuizIndex from './QuizIndex'
import './index.css'
import Sidebar from './SideBar'
import Registration from './Registration'
import Login from './Login'

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
    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    if (username && token) {
      this.state.currentUser = { username, token }
    // this.setState(state => ({token: 'token'})
    }
    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  setCurrentUser (user) {
    console.log(user)
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.api_token)
    this.setState({ currentUser: user })
  }

  logOut () {
    window.localStorage.setItem('username', null)
    window.localStorage.clear()
    this.setState({
      currentUser: null
    })
  }

  render () {
    const { currentUser } = this.state
    return (
      <div className='App'>
        <Sidebar currentUser={currentUser} onLogout={this.logOut} />
        <header className='App-header'>
          <h1 className='App-title'>The Bricks</h1>
        </header>
        <Router>
          <div className='board'>
            {/* <RegistrationForm currentUser={this.state.CurrentUser} setCurrentUser={this.setCurrentUser} /> */}
            {/* <LoginForm currentUser={this.state.CurrentUser} setCurrentUser={this.setCurrentUser} /> */}
            {/* <Dashboard currentUser={this.state.CurrentUser} setcurrentUser={this.setCurrentUser} logout={this.logout} /> */}

            {/* <Route exact path='/' render={() =>
              <Guard condition={currentUser} redirectTo='./login'>
                <Dashboard currentUser={currentUser} setcurrentUser={this.setCurrentUser} logout={this.logout} />
              </Guard>
            } /> */}

            <Route path='./Login' render={() =>
              <Guard condition={!currentUser} redirectTo='/'>
                <Login currentUser={currentUser} setCurrentUser={this.setCurrentUser} />
              </Guard>
            } />

            <Route path='./Registration' render={() =>
              <Guard condition={!currentUser} redirectTo='/'>
                <Registration currentUser={currentUser} setCurrentUser={this.setCurrentUser} />
              </Guard>

            } />
          </div>
        </Router>
        <div className='quiz-display'>
          {currentUser
            ? <QuizIndex currentUser={currentUser} />
            : <EnterSite setCurrentUser={this.setCurrentUser} />
          }
        </div>
      </div>

    )
  }
}
const Guard = ({ redirectTo, condition, children }) => {
  if (condition) {
    return children
  } else {
    return <Redirect to={redirectTo} />
  }
}

export default App
