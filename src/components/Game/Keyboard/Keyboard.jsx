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

		// data in context
		contextAttempts(letter, context);
	};

	const contextAttempts = (letter, context) => {
		// update chosen letters in context state
		const newChosenLetters = [...context.state.chosenLetters, letter];
		context.updateChosenLetters(newChosenLetters);

		// update failed attempts in context state
		const letterInTrack = context.state.trackArtist.match(
			new RegExp(letter, 'g')
		);

		// update count of guessed letters
		if (letterInTrack === null) {
			context.updateFailedAttempts();

			if (context.state.resultGame === null)
				contextResultGame(context, 'fail', 1);
		} else {
			context.updatedGuessedLetters(letterInTrack.length);

			if (context.state.resultGame === null)
				contextResultGame(context, 'correct', letterInTrack.length);
		}
	};

	const contextResultGame = (context, attempt, quantity) => {
		switch (attempt) {
			case 'fail':
				if (context.state.failedAttempts + quantity >= 7) {
					context.updatedResultGame(false);
				}
				break;

			case 'correct':
				if (
					context.state.longOfWord > 0 &&
					context.state.guessedLetters + quantity >=
						context.state.longOfWord
				) {
					context.updatedResultGame(true);
				}
				break;

			default:
				break;
		}
	};

	return (
		<div id="container-keyboard">
			<Context.Consumer>
				{(context) => {
					// won or lose
					if (context.state.resultGame != null) {
						return;
					}

					return keys.map((key) => (
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
					));
				}}
			</Context.Consumer>
		</div>
	);
};

export default Keyboard;
