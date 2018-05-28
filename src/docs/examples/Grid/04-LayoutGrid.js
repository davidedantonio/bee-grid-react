import React from 'react';
import Grid from '@webeetle/Grid';
import GridItem from '@webeetle/GridItem';

/**
 * You can specify columns number class on the container. For example if you want a grid with six columns for each brekpoint you can specify the cols={i} property, where i is a number between 1 and 12.
 */
export default function LayoutGrid() {
  return (
    <Grid
      container="fluid"
      cols={6}
      >
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
      <GridItem>7</GridItem>
      <GridItem>8</GridItem>
      <GridItem>9</GridItem>
      <GridItem>10</GridItem>
      <GridItem>11</GridItem>
      <GridItem>12</GridItem>
    </Grid>
  );
}
