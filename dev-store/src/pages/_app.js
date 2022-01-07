import GlobalStyle from '../styles/global';
import dynamic from 'next/dynamic'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import CartState from '../context/cart/CartState';

function MyApp({ Component, pageProps }) {
  const DynamicComponentWithNoSSR = dynamic(() => import('../components/Layout'),
    { ssr: false }
  );

  return (
    <>
      <ToastContainer
        theme="colored"
        autoClose={6000}
      />
      <CartState>
        <DynamicComponentWithNoSSR>
          <Component {...pageProps} />
        </DynamicComponentWithNoSSR>
      </CartState>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
