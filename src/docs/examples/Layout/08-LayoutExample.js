import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../components/Examples/HeaderExample';
import MainExample from '../../components/Examples/MainExample';
import NavExample from '../../components/Examples/NavExample';
import AsideExample from '../../components/Examples/AsideExample';

/**
 * Layout example #8
 */
export default function LayoutExampleEight() {
  return (
    <Layout
      type={8}
      header={<HeaderExample />}
      main={<MainExample />}
      nav={<NavExample />}
      aside={<AsideExample />}
      />
  );
}
