import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../HeaderExample';
import MainExample from '../../MainExample';

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
