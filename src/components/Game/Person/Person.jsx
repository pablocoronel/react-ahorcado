import React from 'react';
import './Person.css';
import Context from './../../../context/context';
import person_0 from './../../../assets/images/persona_0.png';
import person_1 from './../../../assets/images/persona_1.png';
import person_2 from './../../../assets/images/persona_2.png';
import person_3 from './../../../assets/images/persona_3.png';
import person_4 from './../../../assets/images/persona_4.png';
import person_5 from './../../../assets/images/persona_5.png';
import person_6 from './../../../assets/images/persona_6.png';
import person_7 from './../../../assets/images/persona_7.png';

const Person = () => {
	return (
		<div id="container-person">
			<Context.Consumer>
				{(context) => {
					let personImage = null;

					switch (context.state.failedAttempts) {
						case 0:
							personImage = person_0;
							break;

						case 1:
							personImage = person_1;
							break;

						case 2:
							personImage = person_2;
							break;

						case 3:
							personImage = person_3;
							break;

						case 4:
							personImage = person_4;
							break;

						case 5:
							personImage = person_5;
							break;

						case 6:
							personImage = person_6;
							break;

						case 7:
							personImage = person_7;
							break;

						default:
							personImage = null;
							break;
					}

					return (
						<img
							src={personImage}
							alt={context.state.failedAttempts}
						/>
					);
				}}
			</Context.Consumer>
		</div>
	);
};

export default Person;
