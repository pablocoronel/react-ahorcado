import React, { useState } from 'react';
import Form from './Form/Form';
import Result from './Result/Result';

const Search = () => {
	const [artist, setArtist] = useState('');

	const handleArtist = (value) => {
		setArtist(value);
	};

	return (
		<div>
			<Form artist={(value) => handleArtist(value)} />
			<Result artist={artist} />
		</div>
	);
};

export default Search;
