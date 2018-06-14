import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Enum from '../../utils/Enum';
import * as Classes from '../../utils/Classes';
import classNames from 'classnames';

class GridItem extends Component {

  getClasses = () => {
    const {
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

    const classes = classNames(className, {
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
    });

    return classes;
  };

  render() {
    const classes = this.getClasses();
    const { children } = this.props;

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
  /** If false no padding will added to GridItem */
  noPadding: PropTypes.bool,

  /**
   * If specified, give to GridItem the ability to span over columns.
   * You need to specify an object like {start: 1, end: 3}
   */
  colspan: PropTypes.oneOf(Enum.COLS_NUMBER),

  /**
   * If specified, give to GridItem the ability to span over columns
   * on Small devices. You need to specify an object like {start: 1, end: 3}
   */
  colspanSm: PropTypes.oneOf(Enum.COLS_NUMBER),

  /**
   * If specified, give to GridItem the ability to span over columns
   * on Medium devices. You need to specify an object like {start: 1, end: 3}
   */
  colspanMd: PropTypes.oneOf(Enum.COLS_NUMBER),

  /**
   * If specified, give to GridItem the ability to span over columns
   * on Large devices. You need to specify an object like {start: 1, end: 3}
   */
  colspanLg: PropTypes.oneOf(Enum.COLS_NUMBER),

  /**
   * If specified, give to GridItem the ability to span over columns
   * on Extra Large devices. You need to specify an object like {start: 1, end: 3}
   */
  colspanXl: PropTypes.oneOf(Enum.COLS_NUMBER),

  /**
   * If specified, give to GridItem the ability to span over rows
   * from a certain value to other.
   * You need to specify an object like {start: 1, end: 3}
   */
  rowStartEnd: PropTypes.shape({
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  /**
   * If specified, give to GridItem the ability to span over rows
   * from a certain value to other on Small devices.
   * You need to specify an object like {start: 1, end: 3}
   */
  rowStartEndSm: PropTypes.shape({
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  /**
   * If specified, give to GridItem the ability to span over rows
   * from a certain value to other on Medium devices.
   * You need to specify an object like {start: 1, end: 3}
   */
  rowStartEndMd: PropTypes.shape({
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  /**
   * If specified, give to GridItem the ability to span over rows
   * from a certain value to other on Large devices.
   * You need to specify an object like {start: 1, end: 3}
   */
  rowStartEndLg: PropTypes.shape({
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  /**
   * If specified, give to GridItem the ability to span over rows
   * from a certain value to other on Extra Large devices.
   * You need to specify an object like {start: 1, end: 3}
   */
  rowStartEndXl: PropTypes.shape({
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  /**
   * If specified, give to GridItem the ability to span over columns
   * from a certain value to other.
   * You need to specify an object like {start: 1, end: 3}
   */
  colStartEnd: PropTypes.shape({
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  /**
   * If specified, give to GridItem the ability to span over columns
   * from a certain value to other on Small devices.
   * You need to specify an object like {start: 1, end: 3}
   */
  colStartEndSm: PropTypes.shape({
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  /**
   * If specified, give to GridItem the ability to span over columns
   * from a certain value to other on Medium devices.
   * You need to specify an object like {start: 1, end: 3}
   */
  colStartEndMd: PropTypes.shape({
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  /**
   * If specified, give to GridItem the ability to span over columns
   * from a certain value to other on Large devices.
   * You need to specify an object like {start: 1, end: 3}
   */
  colStartEndLg: PropTypes.shape({
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  /**
   * If specified, give to GridItem the ability to span over columns
   * from a certain value to other on Extra Large devices.
   * You need to specify an object like {start: 1, end: 3}
   */
  colStartEndXl: PropTypes.shape({
    start: PropTypes.oneOf(Enum.COLS_NUMBER),
    end: PropTypes.oneOf(Enum.COLS_NUMBER)
  }),

  /**
   * If specified, align a GridItem vertically.
   * Possible values are: 'auto', 'start', 'end', 'center', 'baseline', 'stretch'
   */
  align: PropTypes.oneOf(Enum.ALIGNMENT),

  /**
   * If specified, align a GridItem vertically on Small devices.
   * Possible values are: 'auto', 'start', 'end', 'center', 'baseline', 'stretch'
   */
  alignSm: PropTypes.oneOf(Enum.ALIGNMENT),

  /**
   * If specified, align a GridItem vertically on Medium devices.
   * Possible values are: 'auto', 'start', 'end', 'center', 'baseline', 'stretch'
   */
  alignMd: PropTypes.oneOf(Enum.ALIGNMENT),

  /**
   * If specified, align a GridItem vertically on Large devices.
   * Possible values are: 'auto', 'start', 'end', 'center', 'baseline', 'stretch'
   */
  alignLg: PropTypes.oneOf(Enum.ALIGNMENT),

  /**
   * If specified, align a GridItem vertically on Extra Large devices.
   * Possible values are: 'auto', 'start', 'end', 'center', 'baseline', 'stretch'
   */
  alignXl: PropTypes.oneOf(Enum.ALIGNMENT),

  /**
   * If specified, align a GridItem horizontally.
   * Possible values are: 'auto', 'start', 'end', 'center', 'baseline', 'stretch'
   */
  justify: PropTypes.oneOf(Enum.ALIGNMENT),

  /**
   * If specified, align a GridItem horizontally on Small devices.
   * Possible values are: 'auto', 'start', 'end', 'center', 'baseline', 'stretch'
   */
  justifySm: PropTypes.oneOf(Enum.ALIGNMENT),

  /**
   * If specified, align a GridItem horizontally on Medium devices.
   * Possible values are: 'auto', 'start', 'end', 'center', 'baseline', 'stretch'
   */
  justifyMd: PropTypes.oneOf(Enum.ALIGNMENT),

  /**
   * If specified, align a GridItem horizontally on Large devices.
   * Possible values are: 'auto', 'start', 'end', 'center', 'baseline', 'stretch'
   */
  justifyLg: PropTypes.oneOf(Enum.ALIGNMENT),

  /**
   * If specified, align a GridItem horizontally on Extra Large devices.
   * Possible values are: 'auto', 'start', 'end', 'center', 'baseline', 'stretch'
   */
  justifyXl: PropTypes.oneOf(Enum.ALIGNMENT)
};

GridItem.defaultProps = {
  noPadding: false
};

export default GridItem;
