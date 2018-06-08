import React, { Component } from 'react';
import Header from './Header';
import Layout from '@webeetle/Layout';
import DocsIndex from './DocsIndex';
import DocsRouter from './DocsRouter';

class Docs extends Component {
  render() {

    return (
      <DocsRouter>
        <Layout
          type={1}
          header={<Header />}
          main={<DocsIndex />}
        />
      </DocsRouter>
    )
  }
}

export default Docs;
