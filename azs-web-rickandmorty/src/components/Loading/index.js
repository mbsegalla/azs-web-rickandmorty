import React from 'react';

import ReactLoading from 'react-loading';
import { LoadingContainer } from './styles';

function Loading() {
  return (
    <LoadingContainer>
      <ReactLoading
        type="spin"
        color="#4CA986"
        height={100}
        width={100}
      />
    </LoadingContainer>
  );
}

export default Loading;
