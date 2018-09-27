import React, { Component } from 'react'
import { Title, Button } from 'bloomer'

class Sidebar extends Component {
  render () {
    const { currentUser, onLogout } = this.props
    return (
      <section className='sidebar'>
        {/* <Title>Quiz Bricks</Title> */}
        {currentUser &&
        <div>
          <p>Hello, {currentUser.username}!</p>
          <Button onClick={onLogout}>Sign Out</Button>
        </div>
        }
      </section>
    )
  }
}

export default Sidebar
