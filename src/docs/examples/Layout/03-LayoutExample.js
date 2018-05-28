import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../HeaderExample';
import MainExample from '../../MainExample';
import NavExample from '../../NavExample';

/**
 * Layout example #3
 */
export default function LayoutExampleThree() {
  return (
    <Layout
      type={3}
      header={<HeaderExample />}
      main={<MainExample />}
      nav={<NavExample />}
      />
  );
}
