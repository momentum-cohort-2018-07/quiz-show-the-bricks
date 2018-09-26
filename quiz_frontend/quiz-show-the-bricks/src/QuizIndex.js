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

      <ol className='quiz'>
        {this.state.quizzes.map((quiz, idx) =>
          <li key={idx}>

            <h1><NavLink to={`/quizzes/${quiz.id}`}>{quiz.title}</NavLink></h1>
            <p>{quiz.description}</p>
          </li>
        )}
      </ol>
    )
  }
}

export default QuizIndex
