import React from 'react';

const ChildComponent2 = (props) => {
	return (
		<div className={props.valor === 2 ? 'show' : 'hide'}>
			<h3>Segundo componente:</h3>
			{props.valor}
		</div>
	)
};

export default ChildComponent2;