import * as ActionTypes from './types';

const BASE_URL = "http://localhost:7002";

const isLogged = (bool:any) => {
	return {
		type: ActionTypes.IS_LOGGED,
		isLogged: bool
	};
};

const loginHasError = (bool:any) => {
	return {
		type: ActionTypes.LOGIN_HAS_ERROR,
		hasError: bool
	};
};

const loginIsLoading = (bool:any) => {
	return {
		type: ActionTypes.LOGIN_IS_LOADING,
		isLoading: bool
	};
};

const login = (username: string, password: string) => {	
	return (dispatch:any) => {
		dispatch(loginIsLoading(true));

		if (!username || !password) {
			dispatch(loginHasError(true));
			dispatch(loginIsLoading(false));

			return;
		}

		fetch(`${BASE_URL}/auth/login`, {
			credentials: 'same-origin', // 'include', default: 'omit'
			method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
			body: JSON.stringify({ username: username, password: password }), // Coordinate the body type with 'Content-Type'
			headers: new Headers({
			  'Content-Type': 'application/json'
			}),
		  })
		  .then(res => res.json())
		  .then((res) => {
			dispatch(loginIsLoading(false));
				dispatch(loginHasError(false));
				dispatch(isLogged(true));
				localStorage.setItem("token", <any>res.token); // example
		})
		.catch(e => {
			dispatch(loginHasError(true));
		});
	};
};

const logout = () => {
	localStorage.removeItem("token");
	return {
		type: ActionTypes.LOGOUT
	};
};

export default {
	isLogged,
	loginHasError,
	loginIsLoading,
	login,
	logout
};
