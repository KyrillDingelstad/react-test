import { combineReducers } from 'redux';
import search from './search';
import albums from './albums';

export default combineReducers({
	search,
	albums
});