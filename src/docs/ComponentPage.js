import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Properties from './Properties';

const ComponentPage = ({ component }) => {
  const { name, description, props, examples } = component;

  return (
    <main className="p-2 overflow-y-auto">
      <h2>{ name }</h2>
      <p>{ description }</p>

      <h3>Example{ examples.length > 1 && "s" }</h3>
      {
        examples.length > 0 ?
          examples.map( example => <Example key={ example.code } example={ example } componentName={ name } /> ) :
          "No Example exist."
      }

      <h3>Properties</h3>
      {
        props ?
        <Properties props={props} /> :
        "This component have no props."
      }
    </main>
  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
