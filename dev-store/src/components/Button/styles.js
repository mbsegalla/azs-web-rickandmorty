import styled from 'styled-components';

export const ButtonUi = styled.button`
  background-color: #2B0174;
  color: #ffffff;
  border-radius: 0.3rem;
  border: none;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;

  svg {
    margin-left: 0.2rem;
    font-size: 1rem;
  }

  :hover {
    background-color: #260068;
  }
`;
