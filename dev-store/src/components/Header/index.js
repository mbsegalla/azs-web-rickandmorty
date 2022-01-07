import Router from 'next/router'
import { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartContext from '../../context/cart/CartContext';
import userAvatar from '../../assets/user-avatar.jpg';
import { HeaderContent, AvatarContent, Content, QtyCart } from './styles';
import ModalEmpityCart from '../Modal/ModalEmpityCart';

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const { cartItems } = useContext(CartContext);
  const outsideRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (outsideRef.current && !outsideRef.current.contains(e.target)) {
        setOpenModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <HeaderContent>
        <AvatarContent>
          <Image width={45} height={45} src={userAvatar} alt="User avatar" />
          <span onClick={() => Router.push('/')}>Dev Store</span>
        </AvatarContent>
        <Content>
          <AiOutlineShoppingCart
            onClick={() => cartItems.length > 0 ? Router.push('/cart-items') : setOpenModal(true)}
            title="Cart"
          />
          <QtyCart>{cartItems.length > 0 ? cartItems.length : 0}</QtyCart>
        </Content>
      </HeaderContent>

      <ModalEmpityCart
        ref={outsideRef}
        open={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default Header;
