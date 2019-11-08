import React, { Component } from 'react';

class EmpresaBox extends Component {
  deleteEmpresaHandler = (id,e) => {
    e.preventDefault();
    console.log('Delete box empresa!', id);
    this.props.deleteEmpresa(id);
  }

  componentDidMount() {
    console.log('EmpresaBox:', this.props);
  }

  render() {
    console.log('empresabox:', this.props);
    
    const listaEmpresas = this.props.data.map(aE => <li key={aE.id} className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <p>{aE.name}</p>
        <p>{aE.usuario}</p>
        <div><a href="/#" onClick={(e)=>this.deleteEmpresaHandler(aE.id,e)}>Borrar</a></div>
      </div>
    </li>);

    return (
      <div className="EmpresaBox">
        <h4>Empresas</h4>
        <ul className="list-group">{listaEmpresas}</ul>
      </div>
    );
  }
}

export default EmpresaBox;