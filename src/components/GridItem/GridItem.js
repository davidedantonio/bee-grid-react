import React, { Component } from 'react';

class GridItem extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <div
        className="grid-item">
        {children}
      </div>
    )
  }
}

export default GridItem;
