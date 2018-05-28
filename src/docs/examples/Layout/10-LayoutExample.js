import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../HeaderExample';
import MainExample from '../../MainExample';
import NavExample from '../../NavExample';
import AsideExample from '../../AsideExample';
import FooterExample from '../../FooterExample';

/**
 * Layout example #10
 */
export default function LayoutExampleTen() {
  return (
    <div className="docs-example">
      <Layout
        type={10}
        header={<HeaderExample />}
        main={<MainExample />}
        nav={<NavExample />}
        aside={<AsideExample />}
        footer={<FooterExample />}
        />
    </div>
  );
}
