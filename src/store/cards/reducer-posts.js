import { Posts } from './constants'

const initialState = {
  cards: [],
  pokedex: [],
}

export const postsReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case Posts.addPokemon:
      return {
        ...state,
        pokedex: action.payload,
      }
    case Posts.fetchPostsSuccess:
      return {
        ...state,
        cards: action.payload,
      }
    default:
      return initialState
  }
}
