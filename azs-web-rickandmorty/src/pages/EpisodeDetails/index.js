import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { getLocalEpisodesList } from '../../utils/localStorage';
import {
  EpisodeContainer, Back, CardContainer, EpisodeCard, EpisodeContent, EpisodeInfo,
  CharacterContainer, CharacterContent, CharacterPhoto
} from './styles';

function EpisodeDetails({ match }) {
  const [episode, setEpisode] = useState({});

  const episodeId = match && match.params && match.params.id ? match.params.id : undefined;

  useEffect(() => {
    if (episodeId) {
      const foundedEpisode = (getLocalEpisodesList() || []).find((foundEpi) => foundEpi.id === episodeId);
      if (foundedEpisode) {
        setEpisode(foundedEpisode);
      }
    }
  }, [episodeId]);

  return (
    <EpisodeContainer>
      <Back>
        <Link to="/">
          <FaArrowCircleLeft />
          <span>Voltar á página anterior</span>
        </Link>
      </Back>
      <CardContainer>
        {episode && episode.id && (
          <EpisodeCard>
            <EpisodeContent>
              {episode.episode && (
                <EpisodeInfo>
                  <span>Episódio: </span>
                  {episode.episode}
                </EpisodeInfo>
              )}
              {episode.name && (
                <EpisodeInfo>
                  <span>Nome do episódio: </span>
                  {episode.name}
                </EpisodeInfo>
              )}
              {episode.air_date && (
                <EpisodeInfo>
                  <span>Data de lançamento: </span>
                  {episode.air_date}
                </EpisodeInfo>
              )}
            </EpisodeContent>
            <CharacterContainer>
              {episode.characters.map((character, index) => (
                <CharacterContent key={`${index}-${character.name}`} >
                  {character.image && (
                    <CharacterPhoto src={character.image} alt={character.name} />
                  )}
                  {character.name && (
                    <EpisodeInfo>
                      <span>Nome do personagem: </span>
                      {character.name}
                    </EpisodeInfo>
                  )}
                  {character.species && (
                    <EpisodeInfo>
                      <span>Espécie: </span>
                      {character.species}
                    </EpisodeInfo>
                  )}
                  {character.status && (
                    <EpisodeInfo>
                      <span>Status: </span>
                      {character.status}
                    </EpisodeInfo>
                  )}
                </CharacterContent>
              ))}
            </CharacterContainer>
          </EpisodeCard>
        )}
      </CardContainer>
    </EpisodeContainer>
  );
}

EpisodeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}

export default EpisodeDetails;
