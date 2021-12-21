import React from 'react';

import PropTypes from 'prop-types';
import Header from '../../components/Header';
import { Root, HeaderBase, CenterBase, FooterBase } from './styles';
import Footer from '../../components/Footer';

function Main({ children }) {
  return (
    <Root>
      <HeaderBase>
        <Header />
      </HeaderBase>

      <CenterBase>
        {children}
      </CenterBase>

      <FooterBase>
        <Footer />
      </FooterBase>
    </Root>
  );
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main;
