import React from "react";
import "./style.css";

class Timer extends React.Component {
  //this belongs to Mounting Phase
  constructor() {
    super();
    this.state = {
    //   count: 0,
      time: 0,
    };
    this.timer = null;
    console.log("Constructor");
  }
  // handleClick = () => {
  //   const {count} = this.state;
  //   this.setState({
  //     count: count+1
  //   });
  //   console.log(count);
  // };

  //this belongs to Mounting Phase
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  //this belongs to Updating Phase
  shouldComponentUpdate(nextProps, nextState) {
return true}
  //this belongs to Updating Phase

  render() {
    // const { count } = this.state;
    console.log("render");
    return (
      <>
      
        <h1 className="h1">STOPWATCH</h1>
        &nbsp;
        {/* <span>{count}</span> */}
        <h3>{new Date(this.state.time * 1000).toISOString().slice(11,19)}</h3>
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
  componentDidUpdate(prevprops, prevstate, snapshot) {
    console.log("component Did Update");
    if (prevprops.timerOn !== this.props.timerOn) {
      if (this.props.timerOn) {
        // Start the timer
        this.timer = setInterval(() => {
          this.setState((prevState) => ({
            time: prevState.time + 1,
          }));
        }, 1000);
      } else {
        // Stop the timer
        clearInterval(this.timer);
      }
}
}
}
export default Timer;
