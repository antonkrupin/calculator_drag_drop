import React from 'react';
import './App.css';

import Switch from './components/Switch';
import Constructor from './components/Constructor';

const App = () => {
	return (
		<div className="wrapper">
			<div className="main">
				<Switch />
				<Constructor />
			</div>
		</div>
	)
};

export default App;
