import React from 'react';
import { connect } from 'react-redux';
import { getDetails } from '../reducer/album/actions'

class Album extends React.Component {
	constructor(props) {
		super(props)
		this.state =  {
			selected: ''
		}
	}

	handleClick (e, id) {
		this.setState({
			selected: id
		});
		this.props.getAlbumDetails(id);
	}

	getShortTitle(title) {
		if (title.length > 15)
			return title.substring(0, 15) + '...';
		else 
			return title;
	}

	render () {
		let title = null;

		if (this.props.albums.length) {
			title = <h1> Albums </h1>
				
		}
		
		return (
			<div id="album" className="album">
				{title}

				<div className="scroll-wrapper">
					<ul>
						{this.props.albums.map((album) =>
							<li className={this.state.selected == album.id ? 'selected' : ''} key={album.id} onClick={(e) => this.handleClick(e, album.id)}>	
								<img src={album.cover} />
								<label>	{this.getShortTitle(album.title)} </label>
							</li>		
						)}
					</ul>
				</div>
			</div>
		);
  	}
}

const mapStateToProps = ({ artist: { albums } }) => ({
	albums
});

const mapDispatchToProps = dispatch => ({
	getAlbumDetails(value) {
		dispatch(getDetails(value))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);