import axios from 'axios';
import { getStateValue } from '../root/localStorage';
//import { put } from 'redux-saga/effects';
// import { logout } from '../shells/TopBar/actions';

export default function* api(action) {
  const x = getStateValue('user') || null;
  const githubToken =null;
  const token = githubToken;
  
  const baseUrl = 'https://api.github.com/';
  
  const form = action.containsFormData
  ? { "Content-Type": "multipart/form-data" }
  : {};
const headers = Object.assign(
  {},
  { Authorization: token },
  form,
);

  try {
    const response = yield axios({
      method: 'get',
      url: baseUrl +action.handler,
      //data: action.payload || null,
      //params: action.query || null,
      headers
    });

    return response;
  } catch (error) {
    if (error && error.response) {
      if (error.response.status === 401) {
      } else if (error.response.status === 400) {
        return error.response;
      }
    }
    return { data: { data: null }, error };
  }
}



