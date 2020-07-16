import React from 'react';
import './App.css';
import HelloHook from './components/HelloHook';
import UserInfoContext from './contexts/UserInfoContext';
import HelloClass from './components/HelloClass';
import HelloHookMulti from './components/HelloHookMulti';
import multiInfoContext from './contexts/MultiInfoContext';

function App() {
	return (
		<>
		<multiInfoContext.Provider value={'Multi'}>
			<UserInfoContext.Provider value={'Alan'}>		
				<HelloHook />
				<HelloClass />
				<HelloHookMulti />
			</UserInfoContext.Provider >
		</multiInfoContext.Provider>
		</>
	);

}

export default App;
