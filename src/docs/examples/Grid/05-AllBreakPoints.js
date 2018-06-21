import React from 'react';
import Grid from '@beetle/Grid';
import GridItem from '@beetle/GridItem';

export default function AllBreakPoints() {
  return (
    <Grid
      container="fluid"
      cols={1}
      sm={2}
      md={4}
      lg={6}
      xl={12}
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
