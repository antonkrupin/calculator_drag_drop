import React from 'react';

import ResultButton from './calc_buttons/ResultButton';
import OperationsBlock from './OperationsBlock';
import NumBlock from './NumBlock';
import EqualButton from './calc_buttons/EqualButton';

import './Calculator.css';

const Calculator = () => {
	return (
		<div className="calculator">
			<ResultButton />
			<OperationsBlock />
			<NumBlock />
			<EqualButton />
		</div>
	)
};

export default Calculator;