import React, { Component } from 'react'
import request from 'superagent'
import {
  BrowserRouter as Router,
  Route,
  Redirect, NavLink
} from 'react-router-dom'

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
    let { quiz } = this.props
    console.log({quiz})
    return (
      <NavLink to='/quizzes/:id' onClick={(e) => this.handleClick}>
        <div className='quiz-overview'>
          <div key={quiz.id} className='quiz-title has-text-weight-bold'>{quiz.title}</div>
          <div className='question-count'>{quiz.qnum}</div>
        </div>
      </NavLink>
    )
  }
}

export default Quiz
