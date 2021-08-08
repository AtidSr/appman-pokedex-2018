import { combineReducers } from 'redux'

import { postsReducer } from './cards/reducer-posts'

const rootReducer = combineReducers({
  cardsState: postsReducer,
})

export default rootReducer
