import React, { Component } from 'react'
import request from 'superagent'
import { Radio, Button } from 'bloomer'
import './index.css'

class Quiz extends Component {
  constructor (props) {
    super()
    this.state = {
      quiz: [],
      selectedAnswers: [],
      score: '',
      usersBest: '',
      globalAvg: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const user = this.props.currentUser
    if (user && user.token) {
      request.get(`https://fierce-forest-49180.herokuapp.com/api/v1/quizzes/${this.props.id}`)
        .set(`Authorization`, `Bearer ${user.token}`)
        .then(res => { this.setState({ quiz: res.body.quiz }) })
    }
  }

  handleSubmit (answers) {
    const user = this.props.currentUser
    if (user && user.token) {
      const formattedAnswer = {'quiz': {
        'id': this.state.quiz.id,
        'answers': Object.values(answers)
      }
      }
      request.post('https://fierce-forest-49180.herokuapp.com/api/v1/attempts')
        .set(`Authorization`, `Bearer ${user.token}`)
        .send(formattedAnswer)
        .then(res => { this.setState({ score: res.body.attempt.score, usersBest: res.body.attempt.users_best, globalAvg: res.body.attempt.global_average }) })
        // .then(res => { this.setState({ usersBest: res.body.attempt.users_best }) })
    }
  }

  handleAnswer (event) {
    this.setState({
      selectedAnswers: Object.assign({}, this.state.selectedAnswers, { [event.target.name]: event.target.value })
    })
  }

  render () {
    let { quiz, score, usersBest, globalAvg } = this.state

    if (score) {
      return (
        <div className='quiz-score'>
          <h1>{quiz.title}</h1>
          <h3>Your Score Was {score}</h3>
          <h3>Your Best Score Was {usersBest}</h3>
          <h3>The Global Average Is {globalAvg}</h3>
        </div>
      )
    }

    if (!quiz.questions) {
      return <div className='loader' />
    }
    return (
      <div className='quiz-div'>
        <h1 className='quiz-title'>{quiz.title}</h1>
        <h2 className='quiz-questions'>
          {quiz.questions.map((question, idx) =>
            <div key={idx}> Question: {question.body}
              <div className='quiz-answers'>
                <ul>
                  {question.answers.map((answer, idx) =>
                    <li key={idx}> <Radio name={answer.body} value={answer.id} onChange={(event) => this.handleAnswer(event)}>{answer.body}</Radio></li>)}
                </ul>
              </div>
            </div>)}
        </h2>
        <Button className='submit-quiz' onClick={() => this.handleSubmit(this.state.selectedAnswers)}>Submit</Button>
      </div>
    )
  }
}

export default Quiz
