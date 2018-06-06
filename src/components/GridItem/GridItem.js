import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Enum from '../../utils/Enum';
import * as Classes from '../../utils/Classes';
import classNames from 'classnames';

class GridItem extends Component {
  render() {
    const {
      children,
      className,
      noPadding,
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
      colStartEndXl,
      align,
      alignSm,
      alignMd,
      alignLg,
      alignXl,
      justify,
      justifySm,
      justifyMd,
      justifyLg,
      justifyXl
    } = this.props;

    const classes = classNames({
      [`grid-item`]: true,
      [`no-padding`]: noPadding,
      [`${Classes.COLSPAN_PREFIX}-${colspan}`]: colspan,
      [`${Classes.COLSPAN_PREFIX_SM}-${colspanSm}`]: colspanSm,
      [`${Classes.COLSPAN_PREFIX_MD}-${colspanMd}`]: colspanMd,
      [`${Classes.COLSPAN_PREFIX_LG}-${colspanLg}`]: colspanLg,
      [`${Classes.COLSPAN_PREFIX_XL}-${colspanXl}`]: colspanXl,
      [`${Classes.COL_START_END_PREFIX}-${(colStartEnd)?colStartEnd.start:''}-end-${(colStartEnd)?colStartEnd.end:''}`]: colStartEnd,
      [`${Classes.COL_START_END_PREFIX_SM}-${(colStartEndSm)?colStartEndSm.start:''}-end-${(colStartEndSm)?colStartEndSm.end:''}`]: colStartEndSm,
      [`${Classes.COL_START_END_PREFIX_MD}-${(colStartEndMd)?colStartEndMd.start:''}-end-${(colStartEndMd)?colStartEndMd.end:''}`]: colStartEndMd,
      [`${Classes.COL_START_END_PREFIX_LG}-${(colStartEndLg)?colStartEndLg.start:''}-end-${(colStartEndLg)?colStartEndLg.end:''}`]: colStartEndLg,
      [`${Classes.COL_START_END_PREFIX_XL}-${(colStartEndXl)?colStartEndXl.start:''}-end-${(colStartEndXl)?colStartEndXl.end:''}`]: colStartEndXl,
      [`${Classes.ROW_START_END_PREFIX}-${(rowStartEnd)?rowStartEnd.start:''}-end-${(rowStartEnd)?rowStartEnd.end:''}`]: rowStartEnd,
      [`${Classes.ROW_START_END_PREFIX_SM}-${(rowStartEndSm)?rowStartEndSm.start:''}-end-${(rowStartEndSm)?rowStartEndSm.end:''}`]: rowStartEndSm,
      [`${Classes.ROW_START_END_PREFIX_MD}-${(rowStartEndMd)?rowStartEndMd.start:''}-end-${(rowStartEndMd)?rowStartEndMd.end:''}`]: rowStartEndMd,
      [`${Classes.ROW_START_END_PREFIX_LG}-${(rowStartEndLg)?rowStartEndLg.start:''}-end-${(rowStartEndLg)?rowStartEndLg.end:''}`]: rowStartEndLg,
      [`${Classes.ROW_START_END_PREFIX_XL}-${(rowStartEndXl)?rowStartEndXl.start:''}-end-${(rowStartEndXl)?rowStartEndXl.end:''}`]: rowStartEndXl,
      [`${Classes.ALIGN_SELF}-${align}`]: align,
      [`${Classes.ALIGN_SELF_SM}-${alignSm}`]: alignSm,
      [`${Classes.ALIGN_SELF_MD}-${alignMd}`]: alignMd,
      [`${Classes.ALIGN_SELF_LG}-${alignLg}`]: alignLg,
      [`${Classes.ALIGN_SELF_XL}-${alignXl}`]: alignXl,
      [`${Classes.JUSTIFY_SELF}-${justify}`]: justify,
      [`${Classes.JUSTIFY_SELF_SM}-${justifySm}`]: justifySm,
      [`${Classes.JUSTIFY_SELF_MD}-${justifyMd}`]: justifyMd,
      [`${Classes.JUSTIFY_SELF_LG}-${justifyLg}`]: justifyLg,
      [`${Classes.JUSTIFY_SELF_XL}-${justifyXl}`]: justifyXl

    }, className);

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
  /** No padding to grid item */
  noPadding: PropTypes.bool,

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
    breakPoint: PropTypes.string,
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  rowStartEndSm: PropTypes.shape({
    breakPoint: PropTypes.string,
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  rowStartEndMd: PropTypes.shape({
    breakPoint: PropTypes.string,
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  rowStartEndLg: PropTypes.shape({
    breakPoint: PropTypes.string,
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  rowStartEndXl: PropTypes.shape({
    breakPoint: PropTypes.string,
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  colStartEnd: PropTypes.shape({
    breakPoint: PropTypes.string,
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  colStartEndSm: PropTypes.shape({
    breakPoint: PropTypes.string,
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  colStartEndMd: PropTypes.shape({
    breakPoint: PropTypes.string,
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  colStartEndLg: PropTypes.shape({
    breakPoint: PropTypes.string,
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  colStartEndXl: PropTypes.shape({
    breakPoint: PropTypes.string,
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  align: PropTypes.oneOf(Enum.ALIGNMENT),

  alignSm: PropTypes.oneOf(Enum.ALIGNMENT),

  alignMd: PropTypes.oneOf(Enum.ALIGNMENT),

  alignLg: PropTypes.oneOf(Enum.ALIGNMENT),

  alignXl: PropTypes.oneOf(Enum.ALIGNMENT),

  justify: PropTypes.oneOf(Enum.ALIGNMENT),

  justifySm: PropTypes.oneOf(Enum.ALIGNMENT),

  justifyMd: PropTypes.oneOf(Enum.ALIGNMENT),

  justifyLg: PropTypes.oneOf(Enum.ALIGNMENT),

  justifyXl: PropTypes.oneOf(Enum.ALIGNMENT)
};

GridItem.defaultProps = {
  noPadding: false
};

export default GridItem;
