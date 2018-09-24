import React, { Component } from 'react'
import request from 'superagent'

class QuizIndex extends Component {
  constructor () {
    super()
    this.state = {
      quizzes: []
    }
    // don't forget to bind the handleClick
  }

  componentDidMount () {
    request.get('https://fierce-forest-49180.herokuapp.com/api/v1/quizzes')
      .then(res => { this.setState({ quizzes: res.body.quizzes }) })
  }

  render () {
    return (
      <div className='quiz-container'>
        <ul className='quiz-index'>
          {this.state.quizzes.map((quiz, idx) =>
            <li key={idx}>
              <h1>Quiz: {quiz.title}</h1>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default QuizIndex
