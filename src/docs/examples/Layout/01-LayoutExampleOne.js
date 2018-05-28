import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../HeaderExample';
import MainExample from '../../MainExample';

/**
 * Layout Example #1
 */
export default function LayoutExampleOne() {
  return (
    <div className="docs-example">
      <Layout
        type={1}
        header={<HeaderExample />}
        main={<MainExample />}
        />
    </div>
  );
}
