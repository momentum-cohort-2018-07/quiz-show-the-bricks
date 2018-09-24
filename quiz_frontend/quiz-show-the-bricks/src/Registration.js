import React, { Component } from 'react'
import request from 'superagent'

class Registration extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      // passwordConfirmation: '',
      isRegistering: false
    }
    this.handlesubmit = this.handlesubmit.bind(this)
  }

  handlesubmit (event) {
    event.preventDefault()
    this.setState({isRegistering: true})
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    request.post('https://fierce-forest-49180.herokuapp.com/api/v1/users')
      .send(newUser)
      .then(res => res.body)
      .then(user => this.props.setCurrentUser(user))
  }

  render () {
    const { username, password, errorMsg } = this.state
    return (
      <div className='register'>
        <form onSubmit={this.handlesubmit}>
          <div className='column'>
            <input type='text' placeholder='username' value={username}
              onChange={(e) => this.setState({ username: e.target.value })} />
          </div>
          <div className='column'>
            <input type='password' placeholder='password' value={password}
              onChange={(e) => this.setState({ password: e.target.value })} />
          </div>
          <div className='column'>
            <button>Register</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Registration
