import {combineReducers} from 'redux';
import users from './reducers/users';
import flashMessages from './reducers/flashMessages';

export default combineReducers(
	{users, flashMessages}
);