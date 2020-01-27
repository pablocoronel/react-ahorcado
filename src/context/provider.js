import React, { useState } from 'react';
import Context from './context';

let persistedState = { idArtist: null, trackArtist: '' };

const Provider = (props) => {
	const [state, setContextState] = useState(persistedState);

	const value = {
		state,
		updateIdArtist: (id) => {
			persistedState = { ...persistedState, idArtist: id };
			setContextState(persistedState);
		},
		updateTrackArtist: (track) => {
			persistedState = { ...persistedState, trackArtist: track };
			setContextState(persistedState);
		}
	};

	return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
