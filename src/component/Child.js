import React from "react";

class Child extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            time: new Date().toLocaleTimeString(),
        }
        console.log("Child constructor");
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("Child getD");
        return true;
    }
    
    componentDidMount() {
        console.log("Child componentD");
        this.time = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    componentDidUpdate() {
        console.log("Child componentU");
    }

    shouldComponentUpdate() {
        console.log("Child shouldC");
        return true;
    }

    componentWillUnmount() {
        console.log("Child componentW");
        clearInterval(this.time);
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }
    render() {
        console.log("Child render");
        return <>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleClick}>Child</button>
        <h2>Time: {this.state.time}</h2>
        {/* <button onClick={this.props.onTimeChange}>Update Time</button> */}
        </>;
    }
}

export default Child;
