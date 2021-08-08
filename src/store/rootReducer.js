import { combineReducers } from 'redux'

import { postsReducer } from './cards/reducer-posts'
import { pokedexReducer } from './pokedex/reducer'

// right now we have only 1 reducer, but lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
  cardsState: postsReducer,
  pokedexState: pokedexReducer,
})

export default rootReducer
