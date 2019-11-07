import React from 'react';

const User = (props) => (
  <tr><td className="id">{props.id}</td><td>{props.name}</td><td>{props.email}</td></tr>
);

export default User;
