import { GET_QUESTIONS } from '../constants'

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    payload: { questions },
  }
}
