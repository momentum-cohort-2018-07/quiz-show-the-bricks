import React, { Component } from 'react'
import 'bulma/css/bulma.css'

// import EnterSite from './EnterSite'
import QuizIndex from './QuizIndex'
import './index.css'
import Sidebar from './SideBar'
import Login from './Login'
import Registration from './Registration'

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
    this.logOut = this.logout.bind(this)
  }

  setCurrentUser (user) {
    console.log(user)
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.api_token)
    this.setState({ currentUser: user })
  }

 
  logout () {
    window.localStorage.setItem('username', null)
    window.localStorage.clear()
    this.setState({
      currentUser: null
    })
  }

  render () {
    const { currentUser } = this.state
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>The Bricks</h1>
          </header>
          <div className='quiz-display'>

            <Route exact path='/' render={() =>
              <Guard condition={currentUser} redirectTo='./login'>
                <Sidebar currentUser={currentUser} onLogout={this.logOut} />
              </Guard>
            } />

            <Route path='/login' render={() =>
              <Guard condition={!currentUser} redirectTo='/'>
                <Login setCurrentUser={this.setCurrentUser} />
              </Guard>
            } />

            <Route path='/register' render={() =>
              <Guard condition={!currentUser} redirectTo='/'>
                <Registration setCurrentUser={this.setCurrentUser} />
              </Guard>
            } />

            <Route path='/' render={() =>
              <Guard condition={this.state.currentUser} redirectTo='/login'>
                <QuizIndex currentUser={currentUser} />
              </Guard>
            } />
          </div>
        </div>
      </Router>
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
