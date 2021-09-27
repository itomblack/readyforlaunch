import React from "react";
import './Styles.scss';
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import Home from "./Home";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./Header";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
      <Router>
      <Header/> 
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
