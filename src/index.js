import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import { ThemeProvider } from './context/theme';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Routes>
                <Route strict exact path='/' element={<Popular />} />
                <Route path='/battle' element={<Battle />} />
              </Routes>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));