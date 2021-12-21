import React from 'react';

import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

function RouteWithLayout({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>)}
    />
  );
}

RouteWithLayout.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
}

export default RouteWithLayout;
