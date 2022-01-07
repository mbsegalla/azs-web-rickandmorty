import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Modal from "..";
import { FaSadTear } from 'react-icons/fa';
import { Box, ButtonBase, Button } from './styles'

function ModalEmpityCart({ open, setOpenModal }, ref) {
  return (
    <Modal open={open}>
      <Box ref={ref}>
        <span>
          There are no products added to the cart! <FaSadTear />
        </span>
        <ButtonBase>
          <Button onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </ButtonBase>
      </Box>
    </Modal>
  );
}

export default forwardRef(ModalEmpityCart);

ModalEmpityCart.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
}
