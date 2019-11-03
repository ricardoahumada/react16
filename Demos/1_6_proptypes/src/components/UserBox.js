import React, { Component} from 'react';
import PropTypes from 'prop-types';

import UserList from './UserList';

const data = [
  { id: "1", name: "Ricardo", email: "ricardo@netmind.com" },
  { id: "2", name: "Juan", email: "juan@netmind.com" },
  { id: "3", name: "Roberto", email: "roberto@netmind.com" }
];

class UserBox extends Component{
  /* constructor(props){
    super(props);
     this.state={
      data: []
    }
  } */

  state={data: []}

  componentDidMount(){    
    setTimeout(()=>{
      this.setState({data:data});
    },1000);
  }

  render(){
    const data = this.state.data;

    return (
      <div className="UserBox">
        <nav>{this.props.headerProp}</nav>
        <h1>Usuarios</h1>
        <UserList data={data} />
        <div>{this.props.contentProp}</div>
      </div>
    );
  }
  
};

UserBox.defaultProps = {
  headerProp: "Header from props...",
  contentProp: "Content from props..."
}

const titlePropType = (props, propName, componentName) => {
  console.log('titlePropType:', props, propName, componentName);
  if (props[propName]) {
    let value = props[propName];
    if (typeof value !== 'string' || value.length > 10) {
      console.log('error');
      return new Error(
        `${propName} en ${componentName} tiene más de 10 caracteres`
      );
    }
  }
}

UserBox.propTypes = {
  title: titlePropType,
  id: PropTypes.number.isRequired
};

export default UserBox;