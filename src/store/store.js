import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/sagas'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

// we need an initialState otherwise , store will freak out
const initialState = {
  cards: {},
}

const sagaMiddleware = createSagaMiddleware()

// redux sagas is a middleware that we apply to the store
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)
sagaMiddleware.run(rootSaga)

export default store
