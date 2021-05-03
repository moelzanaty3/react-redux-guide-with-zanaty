import { ADD_QUESTION, GET_QUESTIONS } from '../constants'

export default function questionsReducer(questions = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS: {
      return {
        ...questions,
        ...action.payload.questions,
      }
    }
    case ADD_QUESTION: {
      const { question } = action.payload
      return {
        ...questions,
        [question.id]: question,
      }
    }
    default:
      return questions
  }
}
