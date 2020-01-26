import React, { useState } from 'react';
import Context from './context';

const Provider = (props) => {
	const [state, setContextState] = useState({});

	return (
		<Context.Provider
			value={{
				state,
				updateIdArtist: (id) => {
					setContextState({ ...state, idArtist: id });
				}
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default Provider;
