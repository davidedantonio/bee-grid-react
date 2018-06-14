import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Enum from '../../utils/Enum';
import * as Classes from '../../utils/Classes';
import classNames from 'classnames';

class Grid extends Component {

  getClasses = () => {
    const {
      container, cols, sm, md, lg, xl, custom, className
    } = this.props;

    let containerCls = '';
    switch (container) {
      case 'standard':
      containerCls = '';
        break;
      case 'fluid':
        containerCls = '-fluid';
        break;
      default:
        containerCls = '';
        break;
    }

    const classes = classNames(className, {
      [`${Classes.CONTAINER}${containerCls}`]: [`${Classes.CONTAINER}${containerCls}`],
      [`${Classes.PREFIX_COLS}-${cols}`]: cols,
      [`${Classes.PREFIX_COLS_SM}-${sm}`]: sm,
      [`${Classes.PREFIX_COLS_MD}-${md}`]: md,
      [`${Classes.PREFIX_COLS_LG}-${lg}`]: lg,
      [`${Classes.PREFIX_COLS_XL}-${xl}`]: xl,
      [`${Classes.CUSTOM_GRID}`]: custom
    });
    return classes;
  };

  render() {
    const classes = this.getClasses();
    const { children } = this.props;

    return (
      <div
        className={classes}>
        {children}
      </div>
    )
  }
}

Grid.propTypes = {
  /** Containers are the basic layout element in Beegrid */
  container: PropTypes.oneOf(['default','fluid']),

  /** Define the default number of columns for your Grid System */
  cols: PropTypes.oneOf(Enum.COLS_NUMBER),

  /** Define the number of columns for your Grid System on Small devices */
  sm: PropTypes.oneOf(Enum.COLS_NUMBER),

  /** Define the number of columns for your Grid System on Medium devices */
  md: PropTypes.oneOf(Enum.COLS_NUMBER),

  /** Define the number of columns for your Grid System on Large devices */
  lg: PropTypes.oneOf(Enum.COLS_NUMBER),

  /** Define the number of columns for your Grid System on Extra Large devices */
  xl: PropTypes.oneOf(Enum.COLS_NUMBER),
};

Grid.defaultProps = {
  container: 'default'
};

export default Grid;
