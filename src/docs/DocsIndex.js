import React, { Component } from 'react';
import Grid from '@webeetle/Grid';
import GridItem from '@webeetle/GridItem';

class DocsIndex extends Component {
  render() {
    return (
      <Grid cols={1} colsSm={1} colsMd={3} colsLg={3}>
        <GridItem></GridItem>
      </Grid>
    );
  }
}

export default DocsIndex;
