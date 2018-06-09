import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../components/Examples/HeaderExample';
import MainExample from '../../components/Examples/MainExample';
import NavExample from '../../components/Examples/NavExample';
import FooterExample from '../../components/Examples/FooterExample';

/**
 * Layout example #4
 */
export default function LayoutExampleFour() {
  return (
    <Layout
      type={4}
      header={<HeaderExample />}
      main={<MainExample />}
      nav={<NavExample />}
      footer={<FooterExample />}
      />
  );
}
