import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Result.css';
import Context from '../../../context/context';
import { SPOTIFY_TOKEN } from './../../../config/keys';

const Result = (props) => {
	if (props.artist.name === null) {
		return null;
	}

	const handlePlay = (e, updateIdArtist, updateTrackArtist) => {
		// actualiza en context state
		updateIdArtist(props.artist.id);

		searchRandomTrack(props.artist.id, updateTrackArtist);
	};

	return (
		<Context.Consumer>
			{(context) => {
				return (
					<Row>
						<Col
							xs={12}
							md={{ span: 4, offset: 4 }}
							id="resultados"
						>
							<Row id="title">
								<Col>{props.artist.name}</Col>
							</Row>

							{props.artist.image !== null && (
								<div>
									<Row id="image">
										<Col>
											<Image
												src={props.artist.image}
												thumbnail
												alt={props.artist.name}
											/>
										</Col>
									</Row>

									<Row id="play">
										<Col>
											<Link to="/game">
												<Button
													variant="success"
													renderas="button"
													onClick={(
														event,
														updateIdArtist = context.updateIdArtist,
														updateTrackArtist = context.updateTrackArtist
													) =>
														handlePlay(
															event,
															updateIdArtist,
															updateTrackArtist
														)
													}
												>
													<span>Jugar!</span>
												</Button>
											</Link>
										</Col>
									</Row>
								</div>
							)}
						</Col>
					</Row>
				);
			}}
		</Context.Consumer>
	);
};

const searchRandomTrack = (idArtist, updateTrackArtist) => {
	var url =
		'https://api.spotify.com/v1/artists/' +
		idArtist +
		'/top-tracks?country=AR';

	fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + SPOTIFY_TOKEN
		}
	})
		.then((res) => res.json())
		.catch((error) => console.error('Error:', error))
		.then((response) => {
			// console.log('Success top tracks:', response);

			if (response.tracks.length > 0) {
				const randomTrackIndex = Math.round(
					Math.random() * response.tracks.length
				);

				updateTrackArtist(response.tracks[randomTrackIndex].name);
			}
		});
};
export default Result;
