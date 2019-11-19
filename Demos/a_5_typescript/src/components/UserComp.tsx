import React from 'react';
import { User } from '../models/user';

const UserComp = (props:User) => (
  <tr><td>{props.id}</td><td>{props.name}</td><td>{props.email}</td></tr>
);

export default UserComp;
