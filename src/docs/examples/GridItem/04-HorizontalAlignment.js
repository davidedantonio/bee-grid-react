import React from 'react';
import Grid from '@webeetle/Grid';
import GridItem from '@webeetle/GridItem';

/**
 *
 */
export default function HorizontalAlignment() {
  return (
    <div>
      <Grid
        container="fluid"
        cols={3}
        className="mb-1"
        >
        <GridItem justify="start">.justify-self-start</GridItem>
        <GridItem justify="center">.justify-self-center</GridItem>
        <GridItem justify="end">.justify-self-end</GridItem>
      </Grid>

      <Grid
        container="fluid"
        cols={2}
        className="mb-1"
      >
        <GridItem justify="center">.justify-self-center</GridItem>
        <GridItem justify="center">.justify-self-center</GridItem>
      </Grid>

      <Grid
        container="fluid"
        cols={3}
        className="mb-1"
      >
        <GridItem justify="start">.justify-self-start</GridItem>
        <GridItem justify="stretch">.justify-self-stretch</GridItem>
        <GridItem justify="end">.justify-self-end</GridItem>
      </Grid>
    </div>
  );
}
