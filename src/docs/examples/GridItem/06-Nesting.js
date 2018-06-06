import React from 'react';
import Grid from '@webeetle/Grid';
import GridItem from '@webeetle/GridItem';

export default function Nesting() {
  return (
    <Grid
      container="fluid"
      cols={1}
      className="container container-tall"
      >
      <GridItem
        noPadding={true}
        align="center"
        className="transparent"
        >
        <Grid
          container="fluid"
          cols={2}
          >
          <GridItem>One of Two</GridItem>
          <GridItem>Two of Two</GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}
