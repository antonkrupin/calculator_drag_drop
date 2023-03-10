import React from 'react';
// import cn from 'classnames';

import './SwitchButton.css';

const SwitchButton = (props) => {
	const { text, className } = props;

	return (
		<div className={className}>
			<img src="img/icons/runtime_icon_nonactive.svg" alt="runtime icon" />
			{text}
		</div>
	)
};

export default SwitchButton;