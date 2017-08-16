import { SET_ALBUMS } from './actions'

const initialState = [];

export default (state = initialState, action) =>{ 
	switch (action.type) {
		case SET_ALBUMS:
			return action.albums;
		default:
			return state;
	}
}