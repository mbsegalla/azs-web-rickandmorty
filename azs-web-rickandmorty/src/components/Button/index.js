import React from 'react';

import PropTypes from 'prop-types';
import { Button } from './styles';

function ButtonComponent({ title, icon, ...rest }) {
  return (
    <Button {...rest}>
      {title}{icon}
    </Button>
  );
}

ButtonComponent.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
};

export default ButtonComponent;
