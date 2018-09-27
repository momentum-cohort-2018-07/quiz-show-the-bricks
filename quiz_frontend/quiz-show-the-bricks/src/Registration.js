import React, { Component } from 'react'
import request from 'superagent'
import { NavLink } from 'react-router-dom'
import { Field, Label, Control, Input, Button } from 'bloomer'

class Registration extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: ''
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

      <div>

        <div className='is-size-4 has-text-centered'>
          <NavLink to='/login'>Log In</NavLink>
       &nbsp;|&nbsp;
          <NavLink to='/register'>Register</NavLink>
        </div>

        <div className='register'>
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
            <Field>
              <Label>Confirm Password</Label>
              <Input type='password' placeholder='password' />
            </Field>
            <Button>Register</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default Registration
