import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import base from './base';

const rootReducer = combineReducers({
	base,
	routing: routerReducer
});

export default rootReducer;