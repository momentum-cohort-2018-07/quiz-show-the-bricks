import React, { Component } from 'react'
import request from 'superagent'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
      errorMsg: null
    }
    this.handlesubmit = this.handlesubmit.bind(this)
  }

  handlesubmit (event) {
    event.preventDefault()
    console.log(this.state.username, 'username')
    request.post('https://fierce-forest-49180.herokuapp.com/api/v1/users/login')
      .then(res => res.body)
      .then(user => this.props.setCurrentUser(user))
  }

  render () {
    const { username, password, errorMsg } = this.state
    return (
      <header>
        <div className='log in'>
          <form onSubmit={this.handlesubmit}>
            <div className='columns'>
              <div className='column' text='logo' />
              <div className='column'>
                <input type='text' placeholder='username' value={username}
                  onChange={(e) => this.setState({ username: e.target.value })} />
              </div>
              <div className='column'>
                <input type='password' placeholder='password' value={password}
                  onChange={(e) => this.setState({ password: e.target.value })} />
              </div>
              <div className='column'>
                <button type='submit'>Log In</button>
              </div>
              <div className='column'>
                <button>Register</button>
              </div>
            </div>
          </form>
        </div>
      </header>
    )
  }
}

export default Login
