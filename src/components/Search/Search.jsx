import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from './Form/Form';
import Result from './Result/Result';
import './Search.css';

const Search = () => {
	const [artist, setArtist] = useState([]);

	const handleArtist = (value) => {
		setArtist(value);
	};

	return (
		<Container fluid={true} id="container-search">
			<Form artist={(value) => handleArtist(value)} />
			<Result artist={artist} />
		</Container>
	);
};

export default Search;
