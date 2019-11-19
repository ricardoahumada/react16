import * as React from 'react';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import { User } from '../models/user';


interface IProps extends RouteComponentProps<any> {
  onUserSubmit: (user:User) => void;
}


class UserForm extends React.Component<IProps> {
  state = { name: 'ric', email: 'r@r.com', redirect: false };

  redirectToTarget = () => {
    this.props.history.push(`/`)
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.currentTarget.value;
    if(!name.match(/[0-9]/g)) this.setState({ name });
  }

  handleEmailChange = (email: string) => {
    this.setState({ email });
  }

  handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    var name = this.state.name.trim();
    var email = this.state.email.trim();
    if (!name || !email || !e.currentTarget.checkValidity) {
      return;
    }

    // console.log(name, email);

    this.props.onUserSubmit({id:0, name, email });
    this.setState({ name: '', email: '', redirect: true });
    // this.redirectToTarget();
  }

  render() {
    // console.log('UserBox:',this.props);

    return (
      <form className="userForm" onSubmit={this.handleSubmit}>
        {this.renderRedirect()}
        <h2>Nuevo Usuario</h2>
        <p><input
          type="text"
          placeholder="Nombre"
          value={this.state.name}
          onChange={this.handleNameChange}
        /></p>
        <p><input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={(e)=>this.handleEmailChange(e.target.value)}
        /></p>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default withRouter(UserForm);
