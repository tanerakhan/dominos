import actions from './actions'
import { takeEvery, put, all, fork } from 'redux-saga/effects';
import axios from 'axios';

export function* getAllPizza() {
    yield takeEvery(actions.GET_ALL_REQUEST, function* () {
        try {
            let response = yield axios.get(`${process.env.REACT_APP_API_URL}/all`);
            yield put({
                type: actions.GET_ALL_REQUEST_SUCCESS,
                pizza: response.data
            })
         } catch (error) {
            yield put({
                type: actions.GET_ALL_REQUEST_ERROR,
            })
        }
    })
}
// Error handling
export function* getAllError() {
    yield takeEvery(actions.GET_ALL_REQUEST_ERROR,
                       function* () { yield console.log("error") })
}

export default function* rootSaga() {
    yield all([
        fork(getAllPizza)
    ])
}
























/* 


function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  }
  
  function* mySaga() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
  }
  
  export default mySaga;
  
  





*/
