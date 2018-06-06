import React from 'react';
import Grid from '@webeetle/Grid';
import GridItem from '@webeetle/GridItem';

export default function VerticalAlignment() {
  return (
    <Grid
      container="fluid"
      cols={3}
      className="container container-tall"
      >
      <GridItem align="start">.align-self-start</GridItem>
      <GridItem align="center">.align-self-center</GridItem>
      <GridItem align="end">.align-self-end</GridItem>
    </Grid>
  );
}
