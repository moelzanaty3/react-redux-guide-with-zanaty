import { ADD_QUESTION, ANSWER_QUESTION, GET_QUESTIONS } from '../constants'

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
    case ANSWER_QUESTION: {
      const { authedUser, qid, answer } = action.payload
      const targetOption = questions[qid][answer]
      return {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...targetOption,
            votes: [...targetOption.votes, authedUser],
          },
        },
      }
    }
    default:
      return questions
  }
}
