import { Posts } from './constants'

const initialState = {
  cards: [],
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Posts.fetchPokemonCard:
      return state
    case Posts.fetchPostsSuccess:
      console.log(action.payload)
      return {
        ...state,
        cards: action.payload,
      }
    default:
      return initialState
  }
}
