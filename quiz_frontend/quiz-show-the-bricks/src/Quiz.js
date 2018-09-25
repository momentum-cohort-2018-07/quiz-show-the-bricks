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

  componentDidUpdate () {
    const {currentUser} = this.state
    if (currentUser && currentUser.token) {
      request.get('https://fierce-forest-49180.herokuapp.com/api/v1/quizzes/:id')
        .set(`Authorization`, `Bearer ${currentUser.token}`)
        .then(res => { this.setState({ quiz: res.body }) })
    }
    console.log(this.quiz)
  }

  render () {
    let { quiz } = this.state
    console.log({quiz})
    return (
      <div key={quiz.id}>{quiz.title}</div>
    )
  }
}

export default Quiz
