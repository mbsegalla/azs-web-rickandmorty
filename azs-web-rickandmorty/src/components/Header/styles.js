import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 1rem;
  box-shadow: 0 1px 8px 3px rgb(0 0 0 / 20%);
`;

export const LogoBase = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 175px;
  cursor: pointer;
`;

export const ButtonBase = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: #4CA986;
    font-weight: bold;

    :hover {
      text-decoration: underline #4CA986;
    }
    
    svg {
      font-size: 1.2rem;
      color: #FF3814;
      margin-left: 0.3rem;
    }

    @media (max-width: 486px) {
      margin-bottom: 1rem; 
      margin-right: 0;
    }
  }
`;

export const QtyFavEpi = styled.div`
  background-color: #4CA986;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1rem;
  margin-left: -1rem;
  color: #ffffff;
  font-weight: 900;

  @media (max-width: 486px) {
    margin-left: -1rem;
    margin-top: -0.5rem;
  }
`;
