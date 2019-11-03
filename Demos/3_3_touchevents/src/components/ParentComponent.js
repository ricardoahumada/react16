import React, { Component } from 'react';

import ChildComponent from './ChildComponent';
import MyButton from './MyButton';

class ParentComponent extends Component {
    handleParentChange = (e) => {
        console.log('you changed child component:', e); //e is sysnthetic event instance
    }

    render() {
        return (
            <div className="container">
                <h1>Event detector</h1>
                <ChildComponent onChange={this.handleParentChange} />
                <MyButton />
            </div>
        );
    }

}

export default ParentComponent;
