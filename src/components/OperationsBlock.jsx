import React from 'react';

import Button from './calc_buttons/Button';

import './OperationsBlock.css';

const OperationsBlock = () => {
	return (
		<div className="operationsBlock" >
			<div className="buttonsLine" >
				<Button text="/" />
				<Button text="*" />
				<Button text="-" />
				<Button text="+" />
			</div>
		</div>
	)
};

export default OperationsBlock;