import * as ActionTypes from "./types";
import { combineReducers } from "redux";

const initialState = {
	isLogged: false,
	hasError: false,
	isLoading: false,
	name: "",
	username: "",
	password: ""
};

const Login = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ActionTypes.IS_LOGGED:
			return Object.assign({}, state, {
				isLogged: action.isLogged
			});
		case ActionTypes.LOGIN_HAS_ERROR:
			return Object.assign({}, state, {
				hasError: action.hasError
			});
		case ActionTypes.LOGIN_IS_LOADING:
			return Object.assign({}, state, {
				isLoading: action.isLoading
			});
		case ActionTypes.LOGIN:
			return Object.assign({}, state, {
				isLogged: false,
				name: payload.name,
				username: payload.username,
				password: payload.password
			});
		case ActionTypes.LOGOUT:
			return Object.assign({}, state, {
				isLogged: false,
				name: "",
				username: "",
				password: ""
			});
		default:
			return state;
	}
};

export default combineReducers({
	login: Login
});
