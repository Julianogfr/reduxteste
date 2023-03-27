import { combineReducers } from 'redux';
import { loginFormReducer, authReducer } from './reducers';

const rootReducer = combineReducers({
  loginForm: loginFormReducer,
  auth: authReducer,
});

export default rootReducer;