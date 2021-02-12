import { takeEvery, put, all, call, select } from 'redux-saga/effects';
import axios from 'axios';
import {API_URL} from '../config'
const fetchAllPizzaAPI = () => axios.get(`${API_URL}/api/all`);
const getDetailsAPI = (id) => axios.get(`${API_URL}/api/items?id=${id}`);
const delay = (ms) => new Promise(res => setTimeout(res, ms))

export const getNotifiy = (state) => state.notification

export function* getAllPizza() {
    yield put({type: "PENDING", pending: true});
    try {
        const pizzaResponse = yield call(fetchAllPizzaAPI);
        const {data} =  pizzaResponse.data;
        yield put({type: "PENDING", pending: false});
        yield put({type: "ASYNC_GET_ALL_REQUEST", pizza: data.pizza}); 
    } catch (e) {
        yield put({type: "PENDING", pending: false});
        yield put({type: "FAIL", fail: e});
    }
}

export function* getDetails(action) {
    yield put({type: "PENDING", pending: true});
    try {
        const detailsResponse = yield call(getDetailsAPI, action.payload);
        const {details} =  detailsResponse.data;
        yield put({type: "PENDING", pending: false});
        yield put({type: "ASYNC_GET_DETAILS_SUCCESS", details: details[0]});         
    } catch (e) {
        yield put({type: "PENDING", pending: false});
        yield put({type: "FAIL", fail: e});
    }
 }

export function* addBasket(action) {
    try {
        yield put({type: "ASYNC_ADD_BASKET", basket: action.payload});
        let noti = yield select(getNotifiy);
        if(noti){
            yield delay(3000)
            yield put({type: "ASYNC_NOTIFICATION", notification: false}); 
        } 
    } catch (e) {
        yield put({type: "FAIL", fail: e});
    }
 }
export function* notification(action) {
    try {
        yield put({type: "ASYNC_NOTIFICATION", notification: action.payload}); 
    } catch (e) {
        yield put({type: "FAIL", fail: e});
    }
 }
   
 export function* watchNotification() {
    yield takeEvery('NOTIFICATION', notification)
  }
 export function* watchGetAllPizza() {
    yield takeEvery('GET_ALL_REQUEST', getAllPizza)
  }
 export function* watchGetDetails() {
    yield takeEvery('GET_DETAILS_SUCCESS', getDetails)
  }
 export function* watchAddBasket() {
    yield takeEvery('ADD_BASKET', addBasket)
  }

 export default function* rootSaga() {
    yield all([
        watchNotification(),
        getAllPizza(),
        watchGetDetails(),
        watchAddBasket()
    ])
  }