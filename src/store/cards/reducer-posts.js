import { Posts } from './constants'

const initialState = {
  cards: [],
  pokedex: [],
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Posts.fetchPosts:
      return {
        ...state,
      }
    case Posts.addPokemon:
      return {
        ...state,
        pokedex: [...state.pokedex, action.payload],
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
