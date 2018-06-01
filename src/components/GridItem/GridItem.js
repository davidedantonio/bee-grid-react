import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Enum from '../../Utils/Enum';
import * as Classes from '../../Utils/Classes';
import classNames from 'classnames';

class GridItem extends Component {
  render() {
    const {
      children,
      className,
      colspan,
      colspanSm,
      colspanMd,
      colspanLg,
      colspanXl,
      rowStartEnd,
      rowStartEndSm,
      rowStartEndMd,
      rowStartEndLg,
      rowStartEndXl,
      colStartEnd,
      colStartEndSm,
      colStartEndMd,
      colStartEndLg,
      colStartEndXl
    } = this.props;

    let toAddClasses = [];

    if (colStartEnd !== undefined) {
      toAddClasses.push({[`col-start-${colStartEnd.start}-end-${colStartEnd.end}`]: colStartEnd});
    }
    console.log(toAddClasses);

    const classes = classNames(className, {
      [`grid-item`]: true,
      [`${Classes.COLSPAN_PREFIX}-${colspan}`]: colspan,
      [`${Classes.COLSPAN_PREFIX_SM}-${colspanSm}`]: colspanSm,
      [`${Classes.COLSPAN_PREFIX_MD}-${colspanMd}`]: colspanMd,
      [`${Classes.COLSPAN_PREFIX_LG}-${colspanLg}`]: colspanLg,
      [`${Classes.COLSPAN_PREFIX_XL}-${colspanXl}`]: colspanXl,
      ...toAddClasses
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
  /** Colspan Value */
  colspan: PropTypes.oneOf(Enum.COLS_NUMBER),

  /** Colspan Small devices Value */
  colspanSm: PropTypes.oneOf(Enum.COLS_NUMBER),

  /** Colspan Medium devices Value */
  colspanMd: PropTypes.oneOf(Enum.COLS_NUMBER),

  /** Colpspan Large devices Value */
  colspanLg: PropTypes.oneOf(Enum.COLS_NUMBER),

  /** Colspan Extra large devices Value */
  colspanXl: PropTypes.oneOf(Enum.COLS_NUMBER),

  rowStartEnd: PropTypes.shape({
    type: 'row',
    breakPoint: '',
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  rowStartEndSm: PropTypes.shape({
    type: 'row',
    breakPoint: 'sm',
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  rowStartEndMd: PropTypes.shape({
    type: 'row',
    breakPoint: 'md',
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  rowStartEndLg: PropTypes.shape({
    type: 'row',
    breakPoint: 'lg',
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  rowStartEndXl: PropTypes.shape({
    type: 'row',
    breakPoint: 'xl',
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  colStartEnd: PropTypes.shape({
    type: 'row',
    breakPoint: '',
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  colStartEndSm: PropTypes.shape({
    type: 'row',
    breakPoint: 'sm',
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  colStartEndMd: PropTypes.shape({
    type: 'row',
    breakPoint: 'md',
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  colStartEndLg: PropTypes.shape({
    type: 'row',
    breakPoint: 'lg',
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  colStartEndXl: PropTypes.shape({
    type: 'row',
    breakPoint: 'xl',
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  })
};

GridItem.defaultProps = {
  colStartEnd: undefined,
  colStartEndSm: undefined,
  colStartEndMd: undefined,
  colStartEndLg: undefined,
  colStartEndXl: undefined,
  rowStartEnd: undefined,
  rowStartEndSm: undefined,
  rowStartEndMd: undefined,
  rowStartEndLg: undefined,
  rowStartEndXl: undefined
};

export default GridItem;
