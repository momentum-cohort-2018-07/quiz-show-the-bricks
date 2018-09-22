import React, { Component } from 'react'

import {
  Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardBody, ModalCardTitle, ModalCardFooter,
  CreateAccount,
  Button
} from 'bloomer'

class Registration extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      isRegistering: false
    }
  }

  // handleSubmit (event) {
  //   request.post('/api/v1/users')
  //     .then(res => res.body.token)
  // }

  render () {
    const { username, password, errorMsg, passwordConfirmation } = this.state
    return (
      <div className='register'>
        <Modal isActive={this.state.isRegistering}>
          <ModalBackground />
          <ModalCard>
            <ModalCardHeader>
              <ModalCardTitle>Create Account</ModalCardTitle>
              <CreateAccount />
            </ModalCardHeader>
            <ModalCardBody>
              Enter a username and password to create an account!
            </ModalCardBody>
            <ModalCardFooter>
              <Button isColor='success'>Save</Button>
              <Button isColor='warning'>Cancel</Button>
            </ModalCardFooter>
          </ModalCard>
        </Modal>
      </div>
    )
  }
}

export default Registration
