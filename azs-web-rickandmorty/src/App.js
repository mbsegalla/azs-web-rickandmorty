import React from 'react';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={6000}
        theme="colored"
      />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
