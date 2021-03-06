import {combineReducers} from 'redux';
import users from './reducers/users';
import flashMessages from './reducers/flashMessages';
import userTypes from './reducers/userTypes';

export default combineReducers(
	{users, flashMessages, userTypes}
);