import React from 'react';
import Grid from '@beetle/Grid';
import GridItem from '@beetle/GridItem';

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
