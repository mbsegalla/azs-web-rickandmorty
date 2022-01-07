import React, { useContext } from "react";
import Router from 'next/router'
import Button from "../../components/Button";
import CartContext from "../../context/cart/CartContext";
import { CgSmileSad } from 'react-icons/cg';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineArrowLeft } from 'react-icons/ai';
import { numberToMonetary } from "../../utils/number";
import {
  BackTo, TableContainer, Table, TableHead, TableBody, Content,
  ProductQuantity, TotalPrice, NotFound
} from './styles';

const tableHead = [
  {
    label: "Product"
  },
  {
    label: "quantity"
  },
  {
    label: "Price"
  }
]

function CartItems() {
  const { cartItems, addToCart, removeItem } = useContext(CartContext);

  const totalPrice = numberToMonetary(cartItems.reduce((a, c) => a + c.price * c.quantity, 0));

  return (
    <>
      <BackTo>
        <AiOutlineArrowLeft />
        <span onClick={() => Router.push('/')}>
          back to product list
        </span>
      </BackTo>
      <TableContainer>
        {cartItems.length > 0 ? (
          <>
            <Table>
              <TableHead>
                <tr>
                  {tableHead.map((t, index) => (
                    <th key={`${index}-${t.label}`}>{t.label}</th>
                  ))}
                </tr>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Content>
                        <img src={item.image} alt={item.title} />
                        <span>{item.title}</span>
                      </Content>
                    </td>
                    <td>
                      <ProductQuantity>
                        <Button
                          onClick={() => removeItem(item)}
                          icon={<AiOutlineMinus />}
                        />

                        <input
                          value={item.quantity}
                          disabled
                        />

                        <Button
                          onClick={() => addToCart(item)}
                          icon={<AiOutlinePlus />}
                        />
                      </ProductQuantity>
                    </td>
                    <td>{numberToMonetary(item.price)}</td>
                    <td>
                      <Button
                        onClick={() => removeItem(item)}
                        title="Remover"
                      />
                    </td>
                  </tr>
                ))}
              </TableBody>
            </Table>
            <TotalPrice>
              <span>Total:</span>
              <span>{totalPrice}</span>
            </TotalPrice>
          </>
        ) : (
          <NotFound>
            <span>No products in cart!</span>
            <CgSmileSad />
          </NotFound>
        )}
      </TableContainer>
    </>
  );
}

export default CartItems;
