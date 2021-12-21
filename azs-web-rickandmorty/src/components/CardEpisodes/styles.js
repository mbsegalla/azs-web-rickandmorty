import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const EpisodesCard = styled.div`
  width: 300px;
  margin: 1rem;
  background-color: #4CA986;
  padding: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  :hover {
    box-shadow: 0 1px 8px 3px rgb(0 0 0 / 20%);
  }
`;

export const EpisodeInfo = styled.div`
  padding: 0.2rem;
  color: white;

  span {
    font-weight: bold;
  }

  :last-child {
    padding-bottom: 0;
  }
`;

export const ButtonBase = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;

  span {
    font-weight: 900;
  }

  svg {
    color: #FF3814;
    font-size: 1.2rem;
  }
`;
