import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  toggleCode = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { showCode: !prevState.showCode }
    });
  }

  render() {
    const { code, name } = this.props.example;
    // Require dinamically JS Components
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;
    const DescriptionComponent = require(`./descriptions/${this.props.componentName}/${name}`).default;

    return (
      <div className="example">
        <DescriptionComponent />
        <div className="docs-example">
          <ExampleComponent />
        </div>
        <div className="mt-1">
          <CodeExample>{code}</CodeExample>
        </div>
      </div>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
};

export default Example;
