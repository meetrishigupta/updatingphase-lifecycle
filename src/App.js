import React from "react";
import Timer from "./Component/Timer";
import ErrorBoundary from "./Component/ErrorBoundary";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timerOn: false,
    };
  }

  handleTimerOn = () => {
    this.setState((prevState) => ({
      timerOn: !prevState.timerOn,
    }));
  };

  render() {
    return (
      <>
      <ErrorBoundary>
            <Timer timerOn={this.state.timerOn} />
        </ErrorBoundary>
      
    
        <div className="button-container">
          <button onClick={this.handleTimerOn} className={this.state.timerOn ? 'active' : 'button'}>
            {this.state.timerOn ? 'STOP' : 'START'}
          </button>
        </div>
      </>
    );
  }
}

export default App;
