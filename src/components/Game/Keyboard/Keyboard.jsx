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

		const key = keys.find((key) => key.value === letter);
		key.disabled = true;

		const newKeys = keys.filter((key) => key.value !== letter);
		newKeys.push(key);
		newKeys.sort((a, b) => a.order - b.order);

		// update local state
		setKeys(newKeys);

		// update chosen letters in context state
		const newChosenLetters = [...chosenLetters, letter];
		context.updateChosenLetters(newChosenLetters);

		// update failed attempts in context state
		const noExists = context.state.trackArtist.search(letter);
		if (noExists < 0) {
			context.updateFailedAttempts();
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
