import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4rem 2rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 300px;
  margin: 1rem;
  padding: 2rem 1rem;
  border-radius: 0.3rem;
  box-shadow: 8px 8px 10px #BFB2D5;

  :hover {
    box-shadow: none;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 0.1rem solid #DFDEDE;
  padding-bottom: 2rem;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Title = styled.span`
  font-weight: 900;
  font-size: 1.2rem;
  color: #2B0174;
  margin-top: 2rem;
`;

export const Description = styled.span`
  margin: 2rem 0;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Price = styled.span`
  font-weight: 900;
  font-size: 1.2rem;
`;

export const PriceContent = styled.div`
  display: flex;
`;

export const PriceDiscount = styled.span`
  color: #848484;
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;

export const DashDiscount = styled.div`
  border-top: 1px solid #A3A3A3;
  margin-top: -0.5rem;
`;

export const ButtonInCart = styled.button`
  color: #2B0174;
  background-color: #ffffff;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  cursor: default;

  svg {
    color: #2B0174;
    font-size: 1rem;
    margin-left: 0.2rem;
  }
`;
