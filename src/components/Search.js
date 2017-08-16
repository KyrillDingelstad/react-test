import React from 'react';
import { connect } from 'react-redux';
import { getSearchResults, getAlbums, getCustomSearchAlbums, setQuery } from '../reducer/artist/actions';

class Search extends React.Component {

	constructor(props) {
		super(props)
		this.state = {query: '', searched: false};
	}

	handleChange(e) {
    	this.setState({
    		query: e.target.value,
    		searched: false
		});

    	setTimeout(this.props.getSearch(e.target.value));
 	}

 	handleKeyPress(e) {
 		if (e.keyCode == 13) {
 			this.setState({
 				searched: true
 			})

 		setTimeout(this.props.getAlbumsFromSearch(e.target.value))
 		}
 	}

 	handleClick(artist) {
 		this.setState({
 			query: artist.name,
 			searched: true
 		});
 		setTimeout(this.props.getArtistAlbums(artist.id));
 	}

 	handleButtonPress() {
 		this.setState({
 			searched: true
 		});

 		setTimeout(this.props.getAlbumsFromSearch(this.state.query));
 	}

  	render() {
  		let searchResults = null;
  		let searchedFor = null;

  		if (this.state.searched) {
  			if (this.props.search.length)
  				searchedFor = <label className="search-result-label"> Search results for "{this.state.query}" </label>
  			else 
  				searchedFor = <label className="search-result-label"> No results for "{this.state.query}" </label>
  		}

  		if (!this.state.searched) {
  			searchResults = this.props.search.map((result) =>
				<li key={result.artist.name} onClick={(e) => this.handleClick(result.artist)}>
					{result.artist.name}
				</li>	
			);
		}
  			
  		
	  	return (
		    <div id="search" className="search">
				<div id="search-field-wrapper" className="search-field-wrapper">
					<input id="search-field" className="search-field" type="text" autoComplete="off" value={this.state.query} onKeyUp={ (e) => this.handleKeyPress(e)} onChange={(e) => this.handleChange(e)} />
					<div className="search-results">
						{searchResults}
					</div>
					<input id="search-button" className="search-button" value="Search" type="button" onClick={(e) => this.handleButtonPress()} />
					
				</div>
				<div className="search-result-label-wrapper">
					{searchedFor}
				</div>

			</div>	
	    );
  	}
}

const mapStateToProps = ({ artist: { search } }) => ({
	search
});

const mapDispatchToProps = (dispatch) => ({

	getSearch(value) {
		if (value.length) {
			return () => {
				dispatch(getSearchResults(value))
			}
		}

	},

	getArtistAlbums(value) {
		return () => {
			dispatch(getAlbums(value))
		}
	},
	
	getAlbumsFromSearch(value) {
		if (value.length) {
			return () => {
				dispatch(getCustomSearchAlbums(value))
			}
		}
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);