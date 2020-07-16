import React, { useContext } from 'react';
import UserInfoContext from '../contexts/UserInfoContext';

function HelloHook() {
	const context = useContext(UserInfoContext);

	return (
		<div>
			<h2>Hello Hook {context}</h2>
		</div>
	);
}


export default HelloHook;
