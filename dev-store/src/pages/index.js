import { useContext } from 'react';
import Button from '../components/Button';
import data from '../data/productList.json';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { numberToMonetary } from '../utils/number';
import CartContext from '../context/cart/CartContext';
import {
  CardContainer, Card, Image, ImageContent, Title, Description, Content,
  PriceContent, Price, PriceDiscount, DashDiscount, ButtonInCart
} from './styles';

function Home() {
  const { addToCart, cartItems } = useContext(CartContext);

  return (
    <CardContainer>
      {data.map((d) => (
        <Card key={d.id}>
          <ImageContent>
            <Image src={d.image} alt={d.title} />
          </ImageContent>
          <Title>{d.title}</Title>
          <Description>{d.description}</Description>
          <Content>
            <PriceContent>
              <Price>{numberToMonetary(d.price)}</Price>
              <PriceDiscount>{numberToMonetary(d.priceDiscount)}<DashDiscount /></PriceDiscount>
            </PriceContent>
            {cartItems.some(item => item.id === d.id) ? (
              <ButtonInCart>
                In the Cart
                <BsBagCheck />
              </ButtonInCart>
            ) : (
              <Button
                onClick={() => addToCart(d)}
                title="Add to cart"
                icon={<AiOutlineShoppingCart />}
              />
            )}
          </Content>
        </Card>
      ))}
    </CardContainer>
  );
}

export default Home;
