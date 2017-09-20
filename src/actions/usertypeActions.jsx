import axios from 'axios';
import {SET_TYPES_TO_REDUX} from './types';

export function userTypeRequest(userData) {
	return dispatch => axios.post('/api/types', userData);
}

export function getTypes() {
	return dispatch => axios.get('/api/types')
		.then(res => res.data)
		.then(data => dispatch(setTypesToRedux(data.types)));
}

export function isTypeExists(identifier) {
	return dispatch => axios.get(`/api/types/${identifier}`);
}

function setTypesToRedux(types) {
	return {
		type: SET_TYPES_TO_REDUX,
		types
	};
}
