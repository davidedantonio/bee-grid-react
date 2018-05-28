import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../HeaderExample';
import MainExample from '../../MainExample';
import NavExample from '../../NavExample';
import FooterExample from '../../FooterExample';
import AsideExample from '../../AsideExample';

/**
 * Layout example #7
 */
export default function LayoutExampleSeven() {
  return (
    <div className="docs-example">
      <Layout
        type={7}
        header={<HeaderExample />}
        main={<MainExample />}
        nav={<NavExample />}
        footer={<FooterExample />}
        aside={<AsideExample />}
        />
    </div>
  );
}
