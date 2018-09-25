import React, { Component } from 'react'
import request from 'superagent'

class Quiz extends Component {
  constructor (props) {
    super()
    this.state = {
      quiz: [],
      published: false
    }
  }

  componentDidMount (quiz, id, user) {
    if (user && user.token) {
      request.get('https://fierce-forest-49180.herokuapp.com/api/v1/quizzes/:id')
        .set(`Authorization`, `Bearer ${user.token}`)
        .then(res => { this.setState({ quiz: res.body.quiz }) })
    }
  }

  render () {
    let { quiz } = this.state
    console.log({quiz})
    return (
      <div>
        {quiz}
      </div>
    )
  }
}

export default Quiz
