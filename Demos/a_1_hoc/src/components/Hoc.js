import React from 'react';

const HOC = (Component, state, intervalFn) => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = state;
    }
    

    UNSAFE_componentWillMount() {
        this.intervals = [];
    }

    componentWillUnmount() {
        this.intervals.forEach(clearInterval);
    }

    componentDidMount() {
        this.setInterval(this.tick.bind(this), 1000);
    }

    setInterval() {
        this.intervals.push(setInterval.apply(null, arguments));
    }

    tick() {
        this.setState(intervalFn);
    }

    render() {
        return <Component {...this.props} {...this.state} />
    }
};

export default HOC;