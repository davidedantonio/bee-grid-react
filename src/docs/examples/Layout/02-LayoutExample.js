import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../HeaderExample';
import MainExample from '../../MainExample';
import NavExample from '../../NavExample';

/**
 * Layout example #2
 */
export default function LayoutExampleTwo() {
  return (
    <div className="docs-example">
      <Layout
        type={2}
        header={<HeaderExample />}
        main={<MainExample />}
        nav={<NavExample />}
        />
    </div>
  );
}
