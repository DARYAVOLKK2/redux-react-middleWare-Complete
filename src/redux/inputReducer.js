import { INPUT_TEXT } from './types'

const intialState = {
  text: '',
}

export const inputReducer = (state = intialState, action) => {
  console.log('input text Reducer > ', action)

  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.text,
      }

    default:
      return state
  }
}
