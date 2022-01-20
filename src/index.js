import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

//create a React component
class App extends React.Component {
  render() {
    return (
      <div>Welcome to React</div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));