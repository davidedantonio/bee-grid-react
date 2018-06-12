import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Documentation from './Documentation';
import DocsIndex from './DocsIndex';

class DocsRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={DocsIndex}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/documentation`}
            component={Documentation}
          />
        </div>
      </Router>
    );
  }
}

export default DocsRouter;
