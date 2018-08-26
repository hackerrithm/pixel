import {
  AUTH_ERROR,
  AUTH_USER,
  FETCH_FEATURE,
  UNAUTH_USER
  } from './types';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: "", authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const featureReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FEATURE:
      return { ...state, homePageFeatures: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  features: featureReducer
});

export default rootReducer;
