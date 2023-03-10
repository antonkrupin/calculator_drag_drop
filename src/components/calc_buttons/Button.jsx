import React from 'react';

import './Button.css';

const Button = (props) => {
	const { text, shrink } = props;

	return (
		<div className="button" style={{'flexShrink': shrink ? 1 : 2}}>
			{text}
		</div>
	)
};

export default Button;
