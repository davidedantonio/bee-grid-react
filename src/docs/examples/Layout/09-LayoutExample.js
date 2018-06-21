import React from 'react';
import Layout from '@beetle/Layout';
import HeaderExample from '../../components/Examples/HeaderExample';
import MainExample from '../../components/Examples/MainExample';
import NavExample from '../../components/Examples/NavExample';
import AsideExample from '../../components/Examples/AsideExample';

/**
 * Layout example #9
 */
export default function LayoutExampleNine() {
  return (
    <Layout
      type={9}
      header={<HeaderExample />}
      main={<MainExample />}
      nav={<NavExample />}
      aside={<AsideExample />}
      />
  );
}
