import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import { ThemeProvider } from './context/theme';
import Nav from "./components/Nav";

//create a React component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }));
      }
    };
  }
  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>
          <div className="container">
            <Nav />
            {/* <Popular /> */}
            <Battle />
          </div>
        </div>
      </ThemeProvider>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));