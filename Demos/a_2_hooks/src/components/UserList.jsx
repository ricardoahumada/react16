import React from 'react';
import User from './User.jsx';

const UserList = (props) => {

  const data=props.data;

  const userNodes = !data?null:data.map((user)=>
      <User key={user.id} id={user.id} name={user.name} email={user.email} />
  );

  return (
    <div className="UserList">
      <table className="table table-striped">
        <thead>
          <tr><th>Id</th><th>Nombre</th><th>Email</th></tr>
        </thead>
        <tbody>
          {userNodes}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
