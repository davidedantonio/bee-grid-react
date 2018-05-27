import React, { Component } from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from './../../config/componentData';
import Header from './Header';
import './scss/docs.scss';

class Docs extends Component {
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
      <div className="layout-2">
        <Header />
        <Navigation components={componentData.map(component => component.name)} />
        <ComponentPage component={component} />
      </div>
    )
  }
}

export default Docs;
