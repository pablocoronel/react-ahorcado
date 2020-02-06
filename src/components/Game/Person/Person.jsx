import React from 'react';
import './Person.css';
import Context from './../../../context/context';

const Person = () => {
	return (
		<div id="container-person">
			<Context.Consumer>
				{(context) => {
					let resultado = null;
					switch (context.state.resultGame) {
						case null:
							resultado = 'en juego';
							break;

						case true:
							resultado = 'ganaste';
							break;

						case false:
							resultado = 'perdiste';
							break;

						default:
							resultado = null;
							break;
					}

					return (
						<div>
							<div>
								Cantidad de errores:{' '}
								{context.state.failedAttempts}
							</div>

							<div>resultado: {resultado}</div>
						</div>
					);
				}}
			</Context.Consumer>
			<img src="asdasd" alt="" />
		</div>
	);
};

export default Person;
