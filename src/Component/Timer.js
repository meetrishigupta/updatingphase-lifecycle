import React from "react";
import "./style.css";

class Timer extends React.Component {
  //this belongs to Mounting Phase
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  //this belongs to Mounting Phase
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  //this belongs to Updating Phase
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  //this belongs to Updating Phase

  render() {
    const { count } = this.state;
    console.log("render");
    return (
      <>
        <h1 className="h1">Timer Rendered</h1>
        <button onClick={this.handleClick}>Click Me</button> &nbsp; &nbsp;
        &nbsp;
        <span>{count}</span>
      </>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  getSnapshotBeforeUpdate(prevProps, nextState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("component Did Update");
  }
}
export default Timer;
