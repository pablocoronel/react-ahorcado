import React, { useState } from 'react';
import Context from './context';

let persistedState = {
	idArtist: null,
	trackArtist: '',
	chosenLetters: [],
	attempts: 0
};

const Provider = (props) => {
	const [state, setContextState] = useState(persistedState);

	const value = {
		state,
		updateIdArtist: (id) => {
			persistedState = { ...persistedState, idArtist: id };
			setContextState(persistedState);
		},
		updateTrackArtist: (track) => {
			persistedState = {
				...persistedState,
				trackArtist: track,
				chosenLetters: [],
				attempts: 0
			};
			setContextState(persistedState);
		},
		updateChosenLetters: (letters) => {
			persistedState = {
				...persistedState,
				chosenLetters: letters,
				attempts: persistedState.attempts++
			};
			setContextState(persistedState);
		}
	};

	return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
