import React, { useState } from 'react';
import Context from './context';

let persistedState = {
	idArtist: null,
	trackArtist: '',
	longOfWord: 0,
	chosenLetters: [],
	failedAttempts: 0,
	guessedLetters: 0,
	resultGame: null
};

const Provider = (props) => {
	const [state, setContextState] = useState(persistedState);

	const value = {
		state,
		updateInfoTrackArtist: (id, track, longOfWord) => {
			persistedState = {
				...persistedState,
				idArtist: id,
				trackArtist: track,
				longOfWord: longOfWord,
				chosenLetters: [],
				failedAttempts: 0
			};
			setContextState(persistedState);
		},
		updateChosenLetters: (letters) => {
			persistedState = {
				...persistedState,
				chosenLetters: letters
			};
			setContextState(persistedState);
		},
		updateFailedAttempts: () => {
			persistedState = {
				...persistedState,
				failedAttempts: ++persistedState.failedAttempts
			};
			setContextState(persistedState);
		},
		updatedGuessedLetters: (quantity) => {
			persistedState = {
				...persistedState,
				guessedLetters: persistedState.guessedLetters + quantity
			};
		},
		updatedResultGame: (result) => {
			persistedState = { ...persistedState, resultGame: result };
			setContextState(persistedState);
		}
	};

	return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
