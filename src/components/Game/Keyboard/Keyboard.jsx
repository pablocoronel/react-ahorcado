import React, { useState } from 'react';
import './Keyboard.css';
import Context from './../../../context/context';

const letters = [
	'q',
	'w',
	'e',
	'r',
	't',
	'y',
	'u',
	'i',
	'o',
	'p',
	'a',
	's',
	'd',
	'f',
	'g',
	'h',
	'j',
	'k',
	'l',
	'z',
	'x',
	'c',
	'v',
	'b',
	'n',
	'ñ',
	'm'
];
const initialKeys = [];

// set keyboard with letters
letters
	.map((letter, index) =>
		initialKeys.push({
			value: letter.toUpperCase(),
			disabled: false,
			order: index
		})
	)
	.sort((a, b) => a.order - b.order);

// component
const Keyboard = () => {
	const [keys, setKeys] = useState(initialKeys);

	const handleTouchedKey = (letter, context) => {
		const chosenLetters = context.state.chosenLetters;

		// no repeated letters
		if (chosenLetters.length > 0) {
			if (chosenLetters.some((item) => item === letter)) {
				return;
			}
		}

		const selectedKey = keys.find((key) => key.value === letter);
		selectedKey.disabled = true;

		const updatedKeys = keys.filter((key) => key.value !== letter);
		updatedKeys.push(selectedKey);
		updatedKeys.sort((a, b) => a.order - b.order);

		// update local state
		setKeys(updatedKeys);

		// update chosen letters in context state
		const newChosenLetters = [...chosenLetters, letter];
		context.updateChosenLetters(newChosenLetters);

		// update failed attempts in context state
		const letterInTrack = context.state.trackArtist.match(letter);
		console.log('turno si: ' + letterInTrack);

		if (letterInTrack === null) {
			context.updateFailedAttempts();
		} else {
			console.log('sumar: ' + letterInTrack.length);
			context.updatedGuessedLetters(letterInTrack.length);
		}

		console.log('largo palabra: ' + context.state.longOfWord);
		console.log('adivinaron: ' + context.state.guessedLetters);

		// lost?
		if (context.state.failedAttempts >= 7) {
			context.updatedResultGame(false);
		} else if (context.state.guessedLetters >= context.state.longOfWord) {
			// won?
			context.updatedResultGame(true);
		}
	};

	return (
		<div id="container-keyboard">
			<Context.Consumer>
				{(context) =>
					keys.map((key) => (
						<div
							className={
								'key ' +
								(context.state.chosenLetters.some(
									(item) => item === key.value
								)
									? 'disabledKey'
									: '')
							}
							key={'key-' + key.value}
							onClick={() => handleTouchedKey(key.value, context)}
						>
							{key.value}
						</div>
					))
				}
			</Context.Consumer>
		</div>
	);
};

export default Keyboard;
