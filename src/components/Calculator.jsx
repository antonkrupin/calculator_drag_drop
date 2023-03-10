import React from 'react';

import OperationsBlock from './OperationsBlock';
import NumBlock from './NumBlock';
import EqualButton from './calc_buttons/EqualButton';

import './Calculator.css';

const Calculator = () => {
	return (
		<div className="calculator">
			<OperationsBlock />
			<NumBlock />
			<EqualButton />
		</div>
	)
};

export default Calculator;