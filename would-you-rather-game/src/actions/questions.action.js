import { ADD_QUESTION, GET_QUESTIONS } from '../constants'
import { _saveQuestion } from '../utils/_DATA'
import { userAddQuestion } from './users.actions'

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
