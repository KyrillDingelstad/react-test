import { SET_SEARCH_RESULTS } from './actions'

const initialState = [];

export default (state = initialState, action) =>{
	switch (action.type) {
		case SET_SEARCH_RESULTS:
				return action.searchResults;
		default:
			return state;
	}
}