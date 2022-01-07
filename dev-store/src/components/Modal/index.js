import PropTypes from 'prop-types';
import { ModalContainer } from './styles';

function Modal({ children, open }) {
  return (
    open && (
      <ModalContainer>
        {children}
      </ModalContainer>
    )
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  open: PropTypes.bool
}

export default Modal;
