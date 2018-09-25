import React, { Component } from 'react'
import Login from './Login'
import Registration from './Registration'

class EnterSite extends Component {
  constructor (props) {
    super()
    this.state = {
      registering: false,
      class: 'entry-text'
    }
  }

  renderRegister (event) {
    this.setState({registering: true})
  }

  renderLogin (event) {
    this.setState({registering: false})
  }

  render () {
    return (
      <div className='column'>
        <div className='entry-options'>
          <div className='entry-text'
            onClick={() => this.renderLogin()}>
            <a>Log In</a>
          </div>
          <div className='entry-text'
            onClick={() => this.renderRegister()}>
            <a>Register</a>
          </div>
        </div>
        {this.state.registering
          ? <Registration setCurrentUser={this.props.setCurrentUser}
            registering={this.props.registering} />
          : <Login setCurrentUser={this.props.setCurrentUser} />
        }
      </div>
    )
  }
}

export default EnterSite
