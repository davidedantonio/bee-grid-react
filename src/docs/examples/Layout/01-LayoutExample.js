import React from 'react';
import Layout from '@beetle/Layout';
import HeaderExample from '../../components/Examples/HeaderExample';
import MainExample from '../../components/Examples/MainExample';

/**
 * Layout Example #1
 */
export default function LayoutExampleOne() {
  return (
    <Layout
      type={1}
      header={<HeaderExample />}
      main={<MainExample />}
      />
  );
}
