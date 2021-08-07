import { call, put, takeLatest, all } from 'redux-saga/effects'
import { Posts } from './constants'
import { fetchPostsSuccess, fetchPostsError } from './action'
import { apiCallGet } from '../axiosApiCallWrapper'
console.log(process.env)
function* getPosts(action) {
  yield takeLatest(Posts.fetchPosts, getPostsFromAPI)
}

function* getPostsFromAPI(action) {
  try {
    // call the api
    const data = yield call(apiCallGet, '/cards', { name: 'p' })
    // call the success action with data
    yield put(fetchPostsSuccess(data.cards))
  } catch (e) {
    // call the error action with data
    yield put(fetchPostsError(e))
  }
}

function* getPostsSuccess() {
  // do anything you want in here,
  // you can set up a redirect, or
  // trigger a notification
}

export default function* rootSaga() {
  yield all([getPosts()])
}
