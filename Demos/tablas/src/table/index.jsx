import React from 'react';
import Tabla1Num from './Tabla1Num';
import './index.css';

const generateTable = (num, idx, delHandler, dupHandler, max = 10) => (<td key={idx}><Tabla1Num num={num} idx={idx} deleteF={delHandler} duplicateF={dupHandler} max={max} /></td >);

/* const Tabla = ({min,max}) => {
    
    const tablas=[];
    for (let index = min; index <= max; index++) {
        tablas.push(generateTable(index, index));
    }

    return (
        <table>
            <tbody>
                <tr>
                    {tablas}
                </tr>
            </tbody>
        </table>
    );
} */

class Tabla extends React.Component {
    state = { tablas: [] };

    componentDidMount() {
        const { min, max, omit } = this.props;
        const tablas = [];

        for (let index = min; index <= max; index++) {
            if (index !== omit) tablas.push(generateTable(index, index, this.deleteHandler, this.duplicateHandler));
        }

        this.setState({ tablas });
    }

    deleteHandler = (val) => {
        console.log('val:', val);
        const tablas = this.state.tablas.filter(tb => tb.key!=val);

        this.setState({tablas});
    }

    duplicateHandler = (num, max) => {
        console.log('duplicateHandler:', num, max);
        const tablas = this.state.tablas;
        tablas.push(generateTable(num, new Date().getTime(), this.deleteHandler, this.duplicateHandler, max));
        this.setState({ tablas });
    }

    render() {
        console.log('render:', this.state);

        const tablas = this.state.tablas;

        return (
            <section>
                <table>
                    <tbody>
                        <tr>
                            {tablas}
                        </tr>
                    </tbody>
                </table>

            </section>
        );
    }
}

export default Tabla;