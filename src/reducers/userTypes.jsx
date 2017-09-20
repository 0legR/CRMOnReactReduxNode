import {SET_TYPES_TO_REDUX} from '../actions/types';

export default function userTypes (state = [], action = {}) {
	switch(action.type) {
		case SET_TYPES_TO_REDUX:
			return action.types;
		default: return state;
	}
};