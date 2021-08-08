import { combineReducers } from 'redux'

import { pokedexReducer } from './cards/reducer'

const rootReducer = combineReducers({
  cardsState: pokedexReducer,
})

export default rootReducer
