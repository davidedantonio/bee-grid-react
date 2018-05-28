import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../HeaderExample';
import MainExample from '../../MainExample';
import NavExample from '../../NavExample';
import AsideExample from '../../AsideExample';

/**
 * Layout example #9
 */
export default function LayoutExampleNine() {
  return (
    <div className="docs-example">
      <Layout
        type={9}
        header={<HeaderExample />}
        main={<MainExample />}
        nav={<NavExample />}
        aside={<AsideExample />}
        />
    </div>
  );
}
