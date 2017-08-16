export const SET_DETAILS = 'SET_DETAILS';

export function getDetails(albumId) {
	return dispatch => {
		DZ.api(`/album/${albumId}`, function(response){
			dispatch(setDetails(response));
		});
	}
}

export function setDetails(details) {
	return {
		type: SET_DETAILS,
		details
	};
}

