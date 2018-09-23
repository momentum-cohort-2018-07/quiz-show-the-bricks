import React, { Component } from 'react'

class Registration extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMsg: null
    }
  }

  handleSubmit () {}

  render () {
    const { username, password, errorMsg, passwordConfirmation } = this.state
    return (
      <div className='App' />
    )
  }
}

export default Registration
