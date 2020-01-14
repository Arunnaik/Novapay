
import { takeLatest, put,delay,call } from "redux-saga/effects";
import api from '../../utils/api';
function* getUSer(action) {
 const handler = 'users';
 const response = yield call(api,Object.assign(action, { handler }));
 const results = response.data;
 console.log(results)
  
}

 export function* fetchHotels() {
  yield takeLatest("FETCH_USERS", getUSer);
}



