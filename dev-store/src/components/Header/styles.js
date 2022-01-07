import styled from 'styled-components';

export const HeaderContent = styled.div`
  width: 100%;
  background-color: #2B0174;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  span {
    color: #ffffff;
    font-size: 1.5rem;
    cursor: pointer;
  }

  svg {
    color: #ffffff;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const AvatarContent = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius:  50%;
  }

  span {
    margin-left: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const QtyCart = styled.div`
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1.5rem;
  margin-left: -0.5rem;
  color: #2B0174;
  font-size: 0.8rem;
`;
