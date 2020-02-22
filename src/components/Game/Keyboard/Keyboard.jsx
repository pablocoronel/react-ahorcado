import React, { useState } from 'react';
import './Keyboard.css';
import Context from './../../../context/context';
import { Button } from 'react-bootstrap';

const letters = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'ñ',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'¿',
	'?',
	'!',
	'¡',
	'-',
	'_',
	'.',
	',',
	'/',
	'*',
	'+'
];
const initialKeys = [];

// set keyboard with letters
letters
	.map((letter, index) =>
		initialKeys.push({
			value: letter.toUpperCase(),
			status: null,
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

		contextAttempts(letter, context, selectedKey);
	};

	const contextAttempts = (letter, context, selectedKey) => {
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
			selectedKey.status = 'failed';

			if (context.state.resultGame === null)
				contextResultGame(context, 'fail', 1);
		} else {
			context.updatedGuessedLetters(letterInTrack.length);
			selectedKey.status = 'guessed';

			if (context.state.resultGame === null)
				contextResultGame(context, 'correct', letterInTrack.length);
		}

		// update local state (key)
		const newStateKeys = keys.filter((key) => key.value !== letter);
		newStateKeys.push(selectedKey);
		newStateKeys.sort((a, b) => a.order - b.order);

		setKeys(newStateKeys);
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
						return (
							<div>
								<Button href="/">Jugar de nuevo</Button>
							</div>
						);
					}

					return keys.map((key) => (
						<div
							className={
								'key ' +
								(key.status === 'guessed'
									? 'guessedKey'
									: key.status === 'failed'
									? 'failedKey'
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
