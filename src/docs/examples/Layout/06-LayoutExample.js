import React from 'react';
import Layout from '@webeetle/Layout';
import HeaderExample from '../../components/Examples/HeaderExample';
import MainExample from '../../components/Examples/MainExample';
import NavExample from '../../components/Examples/NavExample';
import FooterExample from '../../components/Examples/FooterExample';

/**
 * Layout example #6
 */
export default function LayoutExampleSix() {
  return (
    <Layout
      type={6}
      header={<HeaderExample />}
      main={<MainExample />}
      nav={<NavExample />}
      footer={<FooterExample />}
      />
  );
}
