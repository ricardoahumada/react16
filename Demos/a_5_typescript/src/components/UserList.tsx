import React from 'react';
import UserComp from './UserComp';
import { User } from '../models/user';

type UserListProps = {
  data: Array<User>;
};

const UserList = (props: UserListProps) => {

  const data = props.data;

  const userNodes = !data ? null : data.map((user) =>
    <UserComp key={user.id} id={user.id} name={user.name} email={user.email} />
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
