import React from 'react';
import Layout from '@beetle/Layout';
import HeaderExample from '../../components/Examples/HeaderExample';
import MainExample from '../../components/Examples/MainExample';
import NavExample from '../../components/Examples/NavExample';
import FooterExample from '../../components/Examples/FooterExample';

/**
 * Layout example #5
 */
export default function LayoutExampleFive() {
  return (
    <Layout
      type={5}
      header={<HeaderExample />}
      main={<MainExample />}
      nav={<NavExample />}
      footer={<FooterExample />}
      />
  );
}
