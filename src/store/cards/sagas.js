import { call, put, takeLatest, all } from 'redux-saga/effects'
import { Pokedex } from './constants'
import { fetchPokedexSuccess, fetchPokedexError } from './action'
import { apiCallGet } from '../axiosApiCallWrapper'

function* getPosts(action) {
  yield takeLatest(Pokedex.fetchPokedex, getPokedexFromAPI)
}

function* getPokedexFromAPI(action) {
  try {
    // call the api
    const data = yield call(apiCallGet, '/cards', action.payload)
    // call the success action with data
    yield put(fetchPokedexSuccess(data.cards))
  } catch (e) {
    // call the error action with data
    yield put(fetchPokedexError(e))
  }
}

export default function* rootSaga() {
  yield all([getPosts()])
}
