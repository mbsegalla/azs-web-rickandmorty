import styled from 'styled-components';

export const Root = styled.div`
  background-color: #4CA986;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;

  svg {
    color: red;
    margin: 0 0.5rem;
  }

  @media (max-width: 365px) {
    font-size: 0.8rem;
  }
`;