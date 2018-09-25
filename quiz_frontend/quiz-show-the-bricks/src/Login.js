import React, { Component } from 'react'
import request from 'superagent'
import { Field, Label, Control, Input, Button, Notification } from 'bloomer'

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
    // this.setState({loggedIn: true})
    const setUser = {
      username: this.state.username,
      password: this.state.password
    }
    request.post('https://fierce-forest-49180.herokuapp.com/api/v1/users/login')
      .send(setUser)
      .then(res => res.body.user)
      .then(user => this.props.setCurrentUser(user))
  }

  render () {
    const { username, password, errorMsg } = this.state
    return (
      <header>
        <div className='login'>
          <form onSubmit={this.handlesubmit}>
            <Field>
              <Label>Username</Label>
              <Control>
                <Input type='text' placeholder='username' value={username}
                  onChange={(e) => this.setState({ username: e.target.value })} />
              </Control>
            </Field>
            <Field>
              <Label>Password</Label>
              <Control>
                <Input type='password' placeholder='password' value={password}
                  onChange={(e) => this.setState({ password: e.target.value })} />
              </Control>
            </Field>
            <Button type='submit'>LogIn</Button>
          </form>
        </div>
      </header>
    )
  }
}

export default Login
