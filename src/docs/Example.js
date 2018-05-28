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
    const { showCode } = this.state;
    const { code, description, name } = this.props.example;
    // Require dinamically JS Components
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;

    return (
      <div className="example">

        { description && <h4>{ description }</h4> }
        <div className="docs-example">
        <ExampleComponent />
        </div>
        <p className="mt-1">
          <a className="button button-black" href="" onClick={ this.toggleCode }>
            { showCode ? "Hide" : "Show" } Code
          </a>
        </p>

        { showCode && <CodeExample>{code}</CodeExample> }
        <hr />
      </div>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
};

export default Example;
