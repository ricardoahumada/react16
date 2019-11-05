import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {deleteUser} from '../actions/userActionCreator';

const deleteUserHandler=(props, e)=>{
  e.preventDefault();
  console.log('Delete user!', props);
  props.deleteUser(props.id);
}

const User = (props) => (
  <tr>
    <td>{props.id}</td>
    <td>{props.name}</td>
    <td>{props.email}</td>
    <td><button onClick={(e)=>deleteUserHandler(props,e)}>borrar</button></td>
  </tr>
);

const mapStateToProps = (state) => ({
  empresas: state.empresas,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {deleteUser},
    dispatch
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(User);

