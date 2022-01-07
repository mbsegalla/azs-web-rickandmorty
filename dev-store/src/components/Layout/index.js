import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import { HeaderBase, Main, FooterBase } from './styles';

function Layout({ children }) {
  return (
    <>
      <HeaderBase>
        <Header />
      </HeaderBase>

      <Main>
        {children}
      </Main>

      <FooterBase>
        <Footer />
      </FooterBase>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout;
