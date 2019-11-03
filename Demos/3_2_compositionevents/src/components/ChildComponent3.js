import React from 'react';

const ChildComponent3 = (props) => (
	<div className={props.valor === 1 ? 'show' : 'hide'}>
		<h3>Tercer componente:</h3>
		{props.valor}
	</div>
);

export default ChildComponent3;