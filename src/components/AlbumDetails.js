import React from 'react';
import { connect } from 'react-redux';


class AlbumDetails extends React.Component {
	constructor(props) {
		super(props)
	}

	getShortTitle(title) {
		if (title.length > 40)
			return title.substring(0, 37) + '...';
		else 
			return title;
	}

	render () {

		let albumDetailsHeader = null;
		let trackListHeader = null;

		if (this.props.details.tracks) {
			albumDetailsHeader = 
				<div className="album-details-header">
					<img src={this.props.details.cover} />
					<h2> {this.props.details.title} </h2>
				</div>;
			
			trackListHeader = 
				<ul className="track-list-header">
					<li style={{width: '50px'}}>
						# 
					</li>
					<li style={{width: '300px'}}>
						Title
					</li>
					<li style={{width: '150px'}}>
						Artist
					</li>

					<li style={{width: '150px'}}>
						Duration
					</li>
				</ul>;					
		}

		return (
			<div id="album-details" className="album-details">
				{albumDetailsHeader}
				{trackListHeader}
				<ul className="track-list">
					{this.props.details.tracks && this.props.details.tracks.data.map((track, i) =>	
						<li key={track.id}>
							<ul className="track">
								<li style={{width: '50px'}}>
									{i + 1}
								</li>
								<li style={{width: '300px'}}>
									{this.getShortTitle(track.title)}
								</li>
								<li style={{width: '150px'}}>
									{track.artist.name}
								</li>
								<li style={{width: '150px'}}>
									{Math.round((track.duration / 60) * 100) / 100}
								</li>
							</ul>
						</li>
					)}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ album: { details } }) => ({
	details
});

export default connect(mapStateToProps)(AlbumDetails);