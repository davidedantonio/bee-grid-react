import React, { Component } from 'react';
import Layout from '@webeetle/Layout';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from './../../config/componentData';
import Header from './Header';
import './scss/docs.scss';
import './../../node_modules/highlight.js/styles/vs2015.css';

class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.pathname.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({route: window.location.hash.substr(1)})
    })
  }

  render() {
    const { route } = this.state;
    const component = route ? componentData.filter( component => component.name === route )[0] : componentData[0];

    return (
      <Layout
        type={2}
        header={<Header />}
        nav={<Navigation components={componentData.map(component => component.name)} />}
        main={<ComponentPage component={component} />}
      />
    )
  }
}

export default Documentation;
