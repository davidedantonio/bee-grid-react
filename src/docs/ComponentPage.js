import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Properties from './Properties';

const ComponentPage = ({ component }) => {
  const { name, description, props, examples } = component;

  return (
    <main className="p-2 overflow-y-auto">
      <div className="page-title">{ name } Component</div>
      <p>{ description }</p>

      {
        examples.length > 0 ?
          examples.map( example => <Example key={ example.code } example={ example } componentName={ name } /> ) :
          "No Example exist."
      }

      <div className="mt-2">
        <h1>Properties</h1>
        {
          props ?
          <Properties props={props} /> :
          "This component have no props."
        }
      </div>
    </main>
  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
