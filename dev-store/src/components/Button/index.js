import React from 'react';

import PropTypes from 'prop-types';
import { ButtonUi } from './styles';

function Button({ title, icon, ...props }) {
  return (
    <ButtonUi {...props}>
      {title}{icon}
    </ButtonUi>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
}

export default Button;
