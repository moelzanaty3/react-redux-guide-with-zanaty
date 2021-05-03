import { GET_QUESTIONS } from '../constants'

export default function questionsReducer(questions = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS: {
      return {
        ...questions,
        ...action.payload.questions,
      }
    }
    default:
      return questions
  }
}
