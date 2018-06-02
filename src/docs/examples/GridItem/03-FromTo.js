import React from 'react';
import Grid from '@webeetle/Grid';
import GridItem from '@webeetle/GridItem';

/**
 *
 */
export default function FromTo() {
  return (
    <Grid
      container="fluid"
      cols={6}
      >
      <GridItem
        colStartEndLg={{start:1, end:2}}
        rowStartEndMd={{start:1, end:2}}
        >1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
      <GridItem>7</GridItem>
      <GridItem>8</GridItem>
      <GridItem>9</GridItem>
      <GridItem>11</GridItem>
      <GridItem>12</GridItem>
      <GridItem>13</GridItem>
      <GridItem>14</GridItem>
      <GridItem>15</GridItem>
      <GridItem>16</GridItem>
    </Grid>
  );
}
