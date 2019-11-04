import React from 'react';
import PropTypes from 'prop-types';


class TickTock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
                React has been running for {this.props.seconds} seconds.
        </p>
        );
    }
}

TickTock.propTypes = {
    seconds: PropTypes.number.isRequired,
}  

export default TickTock