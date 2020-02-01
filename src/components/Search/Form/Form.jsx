import React, { useState, useEffect } from 'react';
import './Form.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { SPOTIFY_TOKEN } from './../../../config/keys';

// component
const FormSearch = (props) => {
	const [artist, setArtist] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		searchArtist(e, setArtist);
	};

	// al obtener el artista
	useEffect(() => {
		props.artist(artist);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [artist]);

	return (
		<Row>
			<Col xs={12} md={{ span: 4, offset: 4 }} id="formulario">
				<h1>Buscá un músico</h1>

				<Form onSubmit={handleSubmit}>
					<Form.Group>
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

const searchArtist = (e, setArtist) => {
	const q = e.target[0].value;
	var url =
		'https://api.spotify.com/v1/search?q=' + q + '&type=artist&limit=5';

	fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + SPOTIFY_TOKEN
		}
	})
		.then((res) => res.json())
		.catch((error) => console.error('Error:', error))
		.then((response) => {
			// console.log('Success:', response);

			if (response.artists && response.artists.items.length > 0) {
				const result = [];

				response.artists.items.map((item) => {
					const itemResult = {
						name: item.name,
						id: item.id,
						image:
							item.images.length > 0 ? item.images[0].url : null
					};

					return result.push(itemResult);
				});

				setArtist(result);
			} else {
				setArtist([
					{
						name: 'No se encontraron artistas',
						id: null,
						image: null
					}
				]);
			}
		});
};

export default FormSearch;
