import React, { Component } from 'react';
import Layout from '@beetle/Layout';
import MainPage from './components/MainPage/MainPage';
import Header from './components/MainComponents/Header';

class DocsIndex extends Component {
  render() {
    return (
      <Layout
        type={1}
        header={<Header background="blue" />}
        main={<MainPage />}
      />
    );
  }
}

export default DocsIndex;
