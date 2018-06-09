import React, { Component } from 'react';
import CodeExample from '../../CodeExample';

class IndexUsage extends Component {
  render() {
    const code = (
`import React from 'react';
import Grid from '@webeetle/Grid';
import GridItem from '@webeetle/GridItem';

const App = () => (
  <Grid container="fluid" cols={2}>
    <GridItem>
      Hello Everyone,
    </GridItem>
    <GridItem>
      I'm BeeGrid React!
    </GridItem>
  </Grid>
);`
    );

    return (
      <div>
        <h2 className="color-blue">Usage</h2>
        <p>BeeGrid React components work in isolation.</p>
        <CodeExample>{code}</CodeExample>
      </div>
    );
  }
}

export default IndexUsage;
