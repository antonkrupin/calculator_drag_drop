import React from 'react';

import Button from './calc_buttons/Button';

import './NumBlock.css';

const NumBlock = () => {
	return (
		<div className="numBlock">
			<div className="buttonsLine">
				<Button text="9" />
				<Button text="8" />
				<Button text="7" />
			</div>
			<div className="buttonsLine">
				<Button text="4" />
				<Button text="5" />
				<Button text="6" />
			</div>
			<div className="buttonsLine">
				<Button text="1" />
				<Button text="2" />
				<Button text="3" />
			</div>
			<div className="buttonsLine">
				<Button text="0" shrink />
				<Button text="," />
			</div>
		</div>
	)
};

export default NumBlock;