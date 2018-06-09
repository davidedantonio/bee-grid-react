import React, { Component } from 'react';
import Grid from '@webeetle/Grid';
import GridItem from '@webeetle/GridItem';
import IndexUsage from './IndexUsage';
import IndexInstall from './IndexInstall';
import IndexSourceCode from './IndexSourceCode';

class MainPage extends Component {
  render() {
    return (
      <main className="overflow-y-auto">
        <Grid container="fluid" cols={1}>
          <GridItem className="master-head docs-background-blue" justify="center" align="center">
            <div className="home-image mt-2 mb-2">
              <img src="assets/images/beegrid_home.png" alt="BeeGrid React" />
            </div>
            <h1 className="color-white">BeeGrid React</h1>
            <p>A series of React components based on <a href="">BeeGrid</a> microframework. Now you can use BeeGrid React to build
            various types of grids thanks to a twelve column system,
              five default responsive tiers, and many predefined layout.</p>

            <Grid cols={1} sm={1} md={1} lg={1} xl={1}>
              <GridItem justify="center" align="center">
                <a href="/Documentation" className="button button-outline-blue button-lg">Get Started</a>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
        <Grid container="fluid" cols={1} sm={1} md={3} lg={3}>
          <GridItem>
            <IndexInstall />
          </GridItem>
          <GridItem>
            <IndexUsage />
          </GridItem>
          <GridItem>
            <IndexSourceCode />
          </GridItem>
        </Grid>
      </main>
    )
  }
}

export default MainPage;
