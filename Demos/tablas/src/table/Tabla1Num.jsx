import React from 'react';
import PropTypes from 'prop-types';
// import {getArray} from '../utils'

class Tabla1Num extends React.Component {
    state = { max: 10 }

    addHandler = () => {
        this.setState({ max: this.state.max + 1 });
    }

    render() {
        console.log('Tabla1Num:', this.props);
        
        const max = this.state.max >= this.props.max ? this.state.max : this.props.max;
        const num = this.props.num;
        const idx = this.props.idx;
        const lista = [...Array(max).keys()].map((el, idx) => <li key={idx}>{num}x{el + 1} = {num * (el + 1)}</li>);

        return (
            <article className="articulo" style={{ color: 'blue', fontSize: '1em' }}>
                <ul>
                    <li><h4>{num}</h4></li>
                    {lista}
                    <li>
                        <button onClick={this.addHandler}>+</button>
                        <button onClick={() => this.props.duplicateF(num, max)}>D</button>
                        <button onClick={() => this.props.deleteF(idx)}>X</button>
                    </li>
                </ul>
            </article>
        );
    }
}

export default Tabla1Num;