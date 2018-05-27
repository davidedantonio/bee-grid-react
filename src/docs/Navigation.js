import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ components }) => {
  return (
    <nav className="docs-navbar">
      <div className="docs-navbar-content p-1">
        <ul>
          {
            components.map( name => {
              return (
                <li key={name}>
                  <a href={`${name}`}>{name}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
    </nav>
  );
}

// Navigation Proptypes
Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
