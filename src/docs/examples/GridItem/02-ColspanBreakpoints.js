import React from 'react';
import Grid from '@webeetle/Grid';
import GridItem from '@webeetle/GridItem';

/**
 *
 */
export default function ColspanBreakPoints() {
  return (
    <Grid
      container="fluid"
      cols={6}
      >
      <GridItem colspanSm={3}>1 to 3 on SM</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
      <GridItem>7</GridItem>
      <GridItem>8</GridItem>
      <GridItem colspanLg={2}>9 to 10 on LG</GridItem>
      <GridItem>11</GridItem>
      <GridItem>12</GridItem>
      <GridItem>13</GridItem>
      <GridItem>14</GridItem>
      <GridItem>15</GridItem>
      <GridItem colspanMd={3}>16 to 18 on MD</GridItem>
    </Grid>
  );
}
