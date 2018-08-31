
// import { Store, createStore, compose, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
// import { state, State } from './reducers';

// export const store: Store<State> = createStore(
//   state,
//   compose(
//     applyMiddleware(reduxThunk),
//   )
// );
import { combineReducers } from 'redux';
import Login from "../app/user/login/reducer";

export default combineReducers({
    login: Login,
})