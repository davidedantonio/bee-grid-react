import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../HeaderExample';
import MainExample from '../../MainExample';
import NavExample from '../../NavExample';
import AsideExample from '../../AsideExample';

/**
 * Layout example #8
 */
export default function LayoutExampleEight() {
  return (
    <div className="docs-example">
      <Layout
        type={8}
        header={<HeaderExample />}
        main={<MainExample />}
        nav={<NavExample />}
        aside={<AsideExample />}
        />
    </div>
  );
}
