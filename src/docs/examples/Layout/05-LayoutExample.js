import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../HeaderExample';
import MainExample from '../../MainExample';
import NavExample from '../../NavExample';
import FooterExample from '../../FooterExample';

/**
 * Layout example #5
 */
export default function LayoutExampleFive() {
  return (
    <Layout
      type={5}
      header={<HeaderExample />}
      main={<MainExample />}
      nav={<NavExample />}
      footer={<FooterExample />}
      />
  );
}
