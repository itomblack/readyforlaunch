import React from "react";
import './Styles.scss';
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
            <Route path="/blog" exact component={Blog} />
            <Route path='/blog/:blogPost' component={BlogPost} />
            <Route path='' component={Home} />
        </Switch>
      </Router>

      </div>
    );
  }
}
