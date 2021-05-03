import { ADD_QUESTION, ANSWER_QUESTION, GET_QUESTIONS } from '../constants'
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { userAddQuestion, userAnswerQuestion } from './users.actions'

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    payload: { questions },
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    payload: { question },
  }
}

export function handleAddQuestion({ optionOneText, optionTwoText, author }) {
  return (dispatch) => {
    return _saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(userAddQuestion({ authedUser: author, qid: question.id }))
        dispatch(addQuestion(question))
      }
    )
  }
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    payload: { authedUser, qid, answer },
  }
}

export function handleAnswerQuestion({ authedUser, qid, answer }) {
  return (dispatch) => {
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(userAnswerQuestion({ authedUser, qid, answer }))
      dispatch(answerQuestion({ authedUser, qid, answer }))
    })
  }
}
