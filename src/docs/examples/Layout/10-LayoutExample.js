import React from 'react';
import Layout from '@beetle/Layout';
import HeaderExample from '../../components/Examples/HeaderExample';
import MainExample from '../../components/Examples/MainExample';
import NavExample from '../../components/Examples/NavExample';
import AsideExample from '../../components/Examples/AsideExample';
import FooterExample from '../../components/Examples/FooterExample';

/**
 * Layout example #10
 */
export default function LayoutExampleTen() {
  return (
    <Layout
      type={10}
      header={<HeaderExample />}
      main={<MainExample />}
      nav={<NavExample />}
      aside={<AsideExample />}
      footer={<FooterExample />}
      />
  );
}
