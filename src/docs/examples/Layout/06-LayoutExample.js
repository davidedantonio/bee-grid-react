import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../HeaderExample';
import MainExample from '../../MainExample';
import NavExample from '../../NavExample';
import FooterExample from '../../FooterExample';

/**
 * Layout example #6
 */
export default function LayoutExampleSix() {
  return (
    <div className="docs-example">
      <Layout
        type={6}
        header={<HeaderExample />}
        main={<MainExample />}
        nav={<NavExample />}
        footer={<FooterExample />}
        />
    </div>
  );
}
