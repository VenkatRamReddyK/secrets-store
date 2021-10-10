import React from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Reveal from './Reveal'
import Surprise from './Surprise.js';
import Input from './Input'

export default function App() {
  return (
    <div className="reveal-container">
      <Router>
        <div>
          <nav className="navigation">
            <ul>
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
              <li>
                <Link to="/">Input</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <Input />
            </Route>
            {/* <Route path="/Reveal">
              <Reveal />
            </Route> */}
            {/* <Route path="/">
              <Surprise />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}
