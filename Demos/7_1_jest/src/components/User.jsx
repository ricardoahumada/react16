import React from 'react';

const User = (props) => (
  <tr><td>{props.id}</td><td>{props.name}</td><td>{props.email}</td></tr>
);

export default User;
