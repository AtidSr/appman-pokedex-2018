import { combineReducers } from 'redux'

import { postsReducer } from './redux/reducer-posts'

// right now we have only 1 reducer, but lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
  cardsState: postsReducer,
})

export default rootReducer
