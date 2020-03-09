import React, { Component } from "react";
import { render } from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
};

const Topics = () => {
  return (
    <div>
      <h2>Topics</h2>
    </div>
  );
};

class Something extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

render(<Something />, document.getElementById("root"));
