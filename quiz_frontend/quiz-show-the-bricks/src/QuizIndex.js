import React, { Component } from 'react'
import request from 'superagent'
import Quiz from './Quiz'

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
    this.setState({takingQuiz: true})
  }

  componentDidMount () {
    request.get('https://fierce-forest-49180.herokuapp.com/api/v1/quizzes')
      .then(res => { this.setState({ quizzes: res.body.quizzes }) })
  }

  render () {
    return (
      <div className='quiz-container'>
        <ol className='quiz'>
          {this.state.quizzes.map((quiz, idx) =>
            <li key={idx}>
              <a onClick={() => this.renderQuiz()}>{quiz.title}</a>
              <p>{quiz.description}</p>
            </li>
          )}
        </ol>
        <Quiz quiz={this.props.quiz} />
      </div>
    )
  }
}

export default QuizIndex
