import { fork,all } from 'redux-saga/effects';
import * as  HomeSagas from '../shell/Home/sagas';


export default function* root() {
    yield all([...Object.values(HomeSagas)].map(fork));
  }
