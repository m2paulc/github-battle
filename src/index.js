import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Popular from "./components/Popular";

//create a React component
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));