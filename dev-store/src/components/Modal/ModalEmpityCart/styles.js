import styled from 'styled-components';

export const Box = styled.div`
  background-color: #2B0174;
  width: 500px;
  height: 250px;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    color: #ffffff;
    font-weight: 900;
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    svg {
      margin-left: 0.5rem;
    }
  }
`;

export const ButtonBase = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #2B0174;
`;
