import React from 'react';
import './App.css';
import Child from "./component/Child";
import Child2 from "./component/Child2";

// virtual dom
// reconciliation, diffing algorithm

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hide: false,
      time: 100,
    }
    console.log("App constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App getD");
    return true;
  }

  componentDidMount() {
    console.log("App componentD");
    console.log("App render");
    console.log(document.getElementById("root"));
    console.log(document.getElementById("heading"));
  }

  componentDidUpdate() {
    console.log("App componentU");
  }

  shouldComponentUpdate() {
    console.log("App shouldC");
    return true;
  }

  handleHide = () => {
    this.setState({
      hide: true,
    });
  }

  // handleTimeChange = () => {
  //   this.setState({
  //     time: this.state.time + 100
  //   })
  // }

  render() {
    console.log("App render");
    // console.log(document.getElementById("root"));
    // console.log(document.getElementById("heading"));
    return (
      <>
        <h1 id="heading">App</h1>
        {!this.state.hide && 
        // <Child time={this.state.time} onTimeChange={this.handleTimeChange}/>
        <Child />
        }
        <Child2 />
        <button onClick={this.handleHide}>Hide</button>
      </>
    );
  }
}

export default App;
