import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Result.css';
import noImage from './../../../assets/images/no-image.png';
import Context from '../../../context/context';
import { SPOTIFY_TOKEN } from './../../../config/keys';

const Result = (props) => {
	if (props.artist.length < 1) {
		return null;
	}

	const handlePlay = (e, idArtist, updateInfoTrackArtist) => {
		// dentro de la funcion, actualiza en context state
		searchRandomTrack(idArtist, updateInfoTrackArtist);
	};

	return (
		<Row>
			<Col xs={12} md={{ span: 4, offset: 4 }} id="resultados">
				<Context.Consumer>
					{(context) =>
						props.artist.map((artist) => (
							<div key={'artist-' + artist.id}>
								<Row id="title">
									<Col>{artist.name}</Col>
								</Row>

								{artist.id !== null && (
									<div>
										<Row id="image">
											<Col>
												<Image
													src={
														artist.image !== null
															? artist.image
															: noImage
													}
													thumbnail
													alt={artist.name}
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
															idArtist = artist.id,
															updateInfoTrackArtist = context.updateInfoTrackArtist
														) =>
															handlePlay(
																event,
																idArtist,
																updateInfoTrackArtist
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
							</div>
						))
					}
				</Context.Consumer>
			</Col>
		</Row>
	);
};

const searchRandomTrack = (idArtist, updateInfoTrackArtist) => {
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
				const randomTrackIndex = Math.floor(
					Math.random() * response.tracks.length
				);

				const track = response.tracks[
					randomTrackIndex
				].name.toUpperCase();

				const longOfWord = track.replace(' ', '').split('').length - 1;

				updateInfoTrackArtist(idArtist, track, longOfWord);
			}
		});
};
export default Result;
