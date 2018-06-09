import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../components/Examples/HeaderExample';
import MainExample from '../../components/Examples/MainExample';
import NavExample from '../../components/Examples/NavExample';

/**
 * Layout example #2
 */
export default function LayoutExampleTwo() {
  return (
    <Layout
      type={2}
      header={<HeaderExample />}
      main={<MainExample />}
      nav={<NavExample />}
      />
  );
}
