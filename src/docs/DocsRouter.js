import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Documentation from './Documentation';
import DocsIndex from './DocsIndex';

class DocsRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path={`/`}
            component={DocsIndex}
          />
          <Route
            exact
            path={`/documentation`}
            component={Documentation}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default DocsRouter;
