import styled from 'styled-components';

export const EpisodeContainer = styled.div`
  width: 100%;
`;

export const Back = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;

  a {
    display: flex;
    color: #000000;

    span {
      font-weight: bold;
    }

    :hover {
      opacity: 0.7;
    }

    svg {
      color: #4CA986;
      margin-right: 0.3rem;
    }
  }

  @media (max-width: 486px) {
    justify-content: center;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const EpisodeCard = styled.div`
  width: 100%;
  margin: 0 2rem 2rem 2rem;
  background-color: #4CA986;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const EpisodeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CharacterContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

export const CharacterPhoto = styled.img`
  width: 75px;
`;
