import React, { Component} from 'react';

import UserList from './UserList.jsx';

class UserBox extends Component{

  state={data: []};

  componentDidMount() {
    console.log("props",this.props);
    this.setState({data: this.props.data});
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