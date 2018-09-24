import React, { Component } from 'react'

class QuizIndex extends component {
  constructor () {
    super ()
    this.state = {
      quizzes: []
    }
    this.handlesubmit = this.handlesubmit.bind(this)
  }

  handlesubmit (event) {
    event.preventDefault()
    request.get(https://fierce-forest-49180.herokuapp.com/api/v1/quizzes)
      .then(res => res.body)
  }

render () {
  const { quizzes } = this.state
  return (
    <div className='quiz-index'>
      <div>value={this.state.body}</div>
    </div>
  )
}
}

export default QuizIndex
