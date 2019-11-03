import React, { Component } from 'react';

import ChildComponent from './ChildComponent';
import ChildComponent2 from './ChildComponent2';
import ChildComponent3 from './ChildComponent3';

class ParentComponent extends Component {

    state = { valor: 0 }

    handleParentChange = (valorobj) => {
        console.log('you changed child component:', valorobj); //e is sysnthetic event instance
        this.setState({ valor: parseInt(valorobj.seleccion) });
    }

    render() {
        return (
            <div className="container">
                <h1>Event detector</h1>
                <ChildComponent onChange={this.handleParentChange} />
                <ChildComponent2 valor={this.state.valor} />
                <ChildComponent3 valor={this.state.valor} />
            </div>
        );
    }

}

export default ParentComponent;
