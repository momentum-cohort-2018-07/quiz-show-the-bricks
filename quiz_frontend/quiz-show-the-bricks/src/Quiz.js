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
    const user = this.props.user
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
      <div className='quiz-div'>
        <h1 className='quiz-title'>{quiz.title}></h1>
        <div classname='quiz-questions'>{quiz.question}</div>
        {quiz.answers.map((answer) =>
          <div>{quiz.answer}</div>
        )}
      </div>
    )
  }
}

export default Quiz
