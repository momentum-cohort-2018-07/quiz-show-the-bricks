import React, { Component } from 'react'

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
    const { username, password } = this.state
    // API call will go here
  }

  render () {
    // const { username, password, errorMsg } = this.state
    return (
      <header>
        <div className='log in'>
          <form onSubmit={this.handlesubmit}>
            <div className='columns'>
              <div className='column' text='logo' />
              <div className='column'>
                <input type='text' placeholder='username' className='' />
              </div>
              <div className='column'>
                <input type='text' placeholder='password' />
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
