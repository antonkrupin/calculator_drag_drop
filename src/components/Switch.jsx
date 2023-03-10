import React from 'react';

import SwitchButton from './UiComponents/SwitchButton';

import './Switch.css';

const Switch = () => {
	return (
		<div className="switch">
			<div className="buttons">
				<SwitchButton text="Runtime" className="transparentBg" />
				<SwitchButton text="Constructor" className="whiteBg" />
			</div>
		</div>
	);
};

export default Switch;