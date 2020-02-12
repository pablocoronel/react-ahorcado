import React from 'react';
import './Person.css';
import Context from './../../../context/context';
import number_0 from './../../../assets/images/0.jpg';
import number_1 from './../../../assets/images/1.jpg';
import number_2 from './../../../assets/images/2.jpg';
import number_3 from './../../../assets/images/3.jpg';
import number_4 from './../../../assets/images/4.jpg';
import number_5 from './../../../assets/images/5.jpg';
import number_6 from './../../../assets/images/6.jpg';
import number_7 from './../../../assets/images/7.jpg';

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

					let numberImage = null;

					switch (context.state.failedAttempts) {
						case 0:
							numberImage = number_0;
							break;

						case 1:
							numberImage = number_1;
							break;

						case 2:
							numberImage = number_2;
							break;

						case 3:
							numberImage = number_3;
							break;

						case 4:
							numberImage = number_4;
							break;

						case 5:
							numberImage = number_5;
							break;

						case 6:
							numberImage = number_6;
							break;

						case 7:
							numberImage = number_7;
							break;

						default:
							numberImage = null;
							break;
					}

					return (
						<div>
							<div>resultado: {resultado}</div>

							<img
								src={numberImage}
								alt={context.state.failedAttempts}
							/>
						</div>
					);
				}}
			</Context.Consumer>
		</div>
	);
};

export default Person;
