import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Beegrid have a set of predefined layouts. With a minimum set of classes and few components you can laying out an entire website.
 */
class Layout extends Component {
  render() {
    const {
      type, header, main, footer, nav, aside
    } = this.props;

    return (
      <div className={'layout-'+type}>
        {header}
        {nav}
        {main}
        {aside}
        {footer}
      </div>
    );
  }
}

Layout.propTypes = {
  /** Layout type: From 1 to 10 */
  type: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

  /** Header Component */
  header: PropTypes.element,

  /** Main Component */
  main: PropTypes.element,

  /** Nav Component */
  nav: PropTypes.element,

  /** Footer Component */
  footer: PropTypes.element,

  /** Aside Component */
  aside: PropTypes.element
}

export default Layout;
