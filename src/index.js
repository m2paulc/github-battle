import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
// import Popular from "./components/Popular";
// import Battle from "./components/Battle";
// import Results from "./components/Results";
import { ThemeProvider } from './context/theme';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from "./components/Loading";

const Popular = React.lazy(() => import('./components/Popular'));
const Battle = React.lazy(() => import('./components/Battle'));
const Results = React.lazy(() => import('./components/Results'));

//create a React component
class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }));
    }
  };

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <React.Suspense fallback={<Loading />}>
                <Routes>
                  <Route strict exact path='/' element={<Popular />} />
                  <Route strict exact path='/battle' element={<Battle />} />
                  <Route path='/battle/results' element={<Results />} />
                </Routes>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));