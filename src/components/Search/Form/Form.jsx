import React, { useState, useEffect } from 'react';
import './Form.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import LASTFM_API_KEY from './../../../config/keys';

// component
const FormSearch = (props) => {
	const [artistName, setArtistName] = useState('');
	const [mbid, setMbid] = useState('');
	const [topTracks, setTopTracks] = useState([]);
	const [trackForPlay, setTrackForPlay] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		searchArtist(e, setArtistName, setMbid);
	};

	// al obtener el artista
	useEffect(() => {
		props.artist(artistName);
	}, [artistName, props]);

	// obtiene las canciones, mediante el codigo unico de artista
	useEffect(() => {
		if (mbid !== '') {
			searchTracks(mbid, setTopTracks);
		}
	}, [mbid]);

	// elije el tema para el juego
	useEffect(() => {
		if (topTracks.length > 0) {
			const randomTrackIndex = Math.round(
				Math.random() * topTracks.length
			);

			setTrackForPlay(topTracks[randomTrackIndex].name);
		}
	}, [topTracks]);

	return (
		<Row>
			<Col xs={12} md={{ span: 4, offset: 4 }} id="formulario">
				<h1>Buscar un artista</h1>
				<b>{artistName}</b>
				<br />
				<b>{trackForPlay}</b>

				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="exampleForm.ControlInput1">
						<Form.Control
							type="text"
							placeholder="Rolling stones"
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Buscar
					</Button>
				</Form>
			</Col>
		</Row>
	);
};

const searchArtist = (e, setArtistName, setMbid) => {
	const artist = e.target[0].value;
	const API_KEY = LASTFM_API_KEY;
	var url =
		'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' +
		artist +
		'&api_key=' +
		API_KEY +
		'&format=json';

	fetch(url, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((res) => res.json())
		.catch((error) => console.error('Error:', error))
		.then((response) => {
			// console.log('Success:', response.results.artistmatches.artist);

			if (response.results.artistmatches.artist[0]) {
				setArtistName(response.results.artistmatches.artist[0].name);
				setMbid(response.results.artistmatches.artist[0].mbid);
			} else {
				setArtistName('No se encontraron artistas');
			}
		});
};

const searchTracks = (mbid, setTopTracks) => {
	const API_KEY = LASTFM_API_KEY;
	var url =
		'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=' +
		mbid +
		'&api_key=' +
		API_KEY +
		'&format=json';

	fetch(url, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((res) => res.json())
		.catch((error) => console.error('Error:', error))
		.then((response) => {
			// console.log('Success:', response);

			if (response.toptracks) {
				setTopTracks(response.toptracks.track);
			}
		});
};

export default FormSearch;
