import React, { Component } from 'react';
import Layout from '@webeetle/Layout';
import Header from './components/MainComponents/Header';
import Navigation from './components/MainComponents/Navigation';
import ComponentPage from './ComponentPage';
import componentData from './../../config/componentData';
import './scss/docs.scss';
import './../../node_modules/highlight.js/styles/atom-one-light.css';

class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.pathname.replace("/documentation","").substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({route: window.location.hash.replace("/documentation","").substr(1)})
    })
  }

  render() {
    let { route } = this.state;
    console.log(route);
    const component = route ? componentData.filter( component => component.name === route )[0] : componentData[0];
    console.log(component);

    return (
      <Layout
        type={2}
        header={<Header background="black" />}
        nav={<Navigation components={componentData.map(component => component.name)} />}
        main={<ComponentPage component={component} />}
      />
    )
  }
}

export default Documentation;
