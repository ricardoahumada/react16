import React from 'react';

import UserList from './UserList.jsx';

const UserBox = (props) => (
  <div className="UserBox">
    <UserList data={props.data} />
  </div>
);

export default UserBox;