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
    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    if (username && token) {
      this.state.currentUser = { username, token }
    // this.setState(state => ({token: 'token'})
    }
    this.setCurrentUser = this.setCurrentUser.bind(this)
    // this.logout = this.logout.bind(this)
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
      <Router>
        <div id='root'>
          <div className='App'>
            <header className='App-header'>
              <h1 className='App-title'><strong>The Bricks</strong></h1>
            </header>
            <div>
              <Registration>
                <div> something </div>
              </Registration>
            </div>
            <div>
              <Login>
                <div> something </div>
              </Login>
            </div>

            {/* <Route exact path='/' render={() =>
              <Guard condition={currentUser} redirectTo='./Login'>
                <Dashboard currentUser={currentUser} setcurrentUser={this.setCurrentUser} logout={this.logout} />
              </Guard>
            } /> */}

            {/* <Route path='/Login' render={() =>
              <Guard condition={!currentUser} redirectTo='/'>
                <Login currentUser={currentUser} setCurrentUser={this.setCurrentUser} />
              </Guard>
            } /> */}

            {/* <Route path='/Register' render={() =>
              <Guard condition={!currentUser} redirectTo='/'>
                <Registration currentUser={currentUser} setCurrentUser={this.setCurrentUser} />
              </Guard>
            } /> */}
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
