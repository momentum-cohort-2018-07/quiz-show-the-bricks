import React, { Component } from 'react'
import request from 'superagent'
import { NavLink } from 'react-router-dom'

class QuizIndex extends Component {
  constructor () {
    super()
    this.state = {
      quizzes: [],
      takingQuiz: false
    }
    // don't forget to bind the handleClick
  }

  renderQuiz (event) {
    this.props.renderQuiz()
  }

  componentDidMount () {
    request.get('https://fierce-forest-49180.herokuapp.com/api/v1/quizzes')
      .then(res => { this.setState({ quizzes: res.body.quizzes }) })
  }

  render () {
    let { quiz } = this.props
    return (
      <NavLink to='/quizzes:id' onClick={(e) => this.renderQuiz}>
        <div className='quiz-container'>
          <ol className='quiz'>
            {this.state.quizzes.map((quiz, idx) =>
              <li key={idx}>
                <h1>{quiz.title}</h1>
                <p>{quiz.description}</p>
              </li>
            )}
          </ol>
        </div>
      </NavLink>
    )
  }
}

export default QuizIndex
