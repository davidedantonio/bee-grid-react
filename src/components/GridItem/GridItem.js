import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Enum from '../../Utils/Enum';
import * as Classes from '../../Utils/Classes';
import classNames from 'classnames';

class GridItem extends Component {
  render() {
    const {
      children, className, colspan
    } = this.props;

    const classes = classNames(className, {
      [`grid-item`]: true,
      [`${Classes.COLSPAN_PREFIX}-${colspan}`]: colspan
    });

    return (
      <div
        className={classes}
        >
        {children}
      </div>
    )
  }
}

GridItem.propTypes = {
  /** Containers are the basic layout element in Beegrid */
  colspan: PropTypes.oneOf(Enum.COLS_NUMBER)
};

GridItem.defaultProps = {};

export default GridItem;
