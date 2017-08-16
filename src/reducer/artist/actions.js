export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_ALBUMS = 'SET_ALBUMS';
export const REMOVE_SEARCH_RESULTS = 'REMOVE_SEARCH_RESULTS';
import { setDetails } from '../album/actions'

export function getSearchResults(query) {
		return dispatch => {
			DZ.api(`/search?q=${query}`, function(response){
					var obj = {};
					for ( var i=0, len=response.data.length; i < len; i++ )
					    obj[response.data[i].artist['id']] = response.data[i];
					
					response.data = new Array();
					for ( var key in obj )
					    response.data.push(obj[key]);
					
					dispatch(setSearchResults(response.data));
			});
		}	
}

export function setSearchResults(searchResults) {
	return {
		type: SET_SEARCH_RESULTS,
		searchResults
	}
}

export function getCustomSearchAlbums(query) {
	return dispatch => {
		DZ.api(`/search?q=${query}`, function(response){
				var obj = {};
					for ( var i=0, len=response.data.length; i < len; i++ )
					    obj[response.data[i].album['id']] = response.data[i];
					
					response.data = new Array();
					for ( var key in obj )
					    response.data.push(obj[key]);
					
				const albums = [];
				response.data.map((data) => {
					albums.push(data.album)
				})
				dispatch(setAlbums(albums));
				dispatch(setDetails({}));
		});
	}
}

export function getAlbums(id) {
	return dispatch => {
		DZ.api(`/artist/${id}/albums`, function(response){
			dispatch(setAlbums(response.data));
			dispatch(setDetails({}));
		});
	}
}

export function setAlbums(albums) {
	return {
		type: SET_ALBUMS,
		albums
	};
}

