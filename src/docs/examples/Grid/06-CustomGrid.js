import React from 'react';
import Grid from '@webeetle/Grid';
import GridItem from '@webeetle/GridItem';

/**
 *
 */
export default function CustomGrid() {
  return (
    <Grid
      container="fluid"
      custom={true}
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
