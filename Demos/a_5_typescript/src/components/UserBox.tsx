import * as React from 'react';

import UserList from './UserList';
import { User } from '../models/user';

type UserBoxProps = {
  data: Array<User>;
};

type UserBoxState = {
  data: Array<User>;
};

class UserBox extends React.Component<UserBoxProps, UserBoxState>{

  state = { data: [] };

  componentDidMount() {
    console.log("props", this.props);
    this.setState({ data: this.props.data });
  }

  render() {
    return (
      <div className="UserBox">
        <UserList data={this.state.data} />
      </div>
    );
  }
}

export default UserBox;