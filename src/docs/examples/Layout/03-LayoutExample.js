import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../components/Examples/HeaderExample';
import MainExample from '../../components/Examples/MainExample';
import NavExample from '../../components/Examples/NavExample';

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
