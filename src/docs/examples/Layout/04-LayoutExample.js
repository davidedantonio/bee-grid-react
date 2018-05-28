import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../HeaderExample';
import MainExample from '../../MainExample';
import NavExample from '../../NavExample';
import FooterExample from '../../FooterExample';

/**
 * Layout example #4
 */
export default function LayoutExampleFour() {
  return (
    <Layout
      type={4}
      header={<HeaderExample />}
      main={<MainExample />}
      nav={<NavExample />}
      footer={<FooterExample />}
      />
  );
}
