import React from 'react';
import Layout from '@beetle/Layout';
import HeaderExample from '../../components/Examples/HeaderExample';
import MainExample from '../../components/Examples/MainExample';
import NavExample from '../../components/Examples/NavExample';
import FooterExample from '../../components/Examples/FooterExample';
import AsideExample from '../../components/Examples/AsideExample';

/**
 * Layout example #7
 */
export default function LayoutExampleSeven() {
  return (
    <Layout
      type={7}
      header={<HeaderExample />}
      main={<MainExample />}
      nav={<NavExample />}
      footer={<FooterExample />}
      aside={<AsideExample />}
      />
  );
}
