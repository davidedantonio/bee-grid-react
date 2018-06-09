import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Documentation from './Documentation';
import DocsIndex from './DocsIndex';
import { withRouter } from 'react-router'

class DocsRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path='/'
            component={DocsIndex}
          />
          <Route
            path='/documentation'
            component={Documentation}
          />
        </div>
      </Router>
    );
  }
}

export default DocsRouter;
