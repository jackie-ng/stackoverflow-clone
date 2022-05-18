import React, { Fragment} from 'react';
import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <Fragment>
        <div className="app">

          {/* A <Switch> ---> <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route exact path='/'
              element={
                <>
                  <Header />
                  <MainPage/>
                </>
              } />
          </Routes>
        </div>
      </Fragment>
    </Router>

  );
}

export default App;
