import React from 'react';
import { Link } from 'react-router-dom';
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
                  <a href={`/documentation/${name}`}>{name}</a>
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
