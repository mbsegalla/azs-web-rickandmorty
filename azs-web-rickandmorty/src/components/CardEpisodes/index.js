import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonComponent from '../Button';
import { BsHeart, BsFillHeartFill } from 'react-icons/bs';
import { CardContainer, EpisodesCard, EpisodeInfo, ButtonBase } from './styles';

function CardEpisodes({ data, existsFavorites, handleRemovefavorites, handleAddFavorites, handleViewed }) {
  return (
    <CardContainer>
      {data.map((episode, index) => (
        <EpisodesCard key={`${index}-${episode.episode}`}>
          <Link to={`/details/${episode.id}`}>
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
            {episode.characters && (
              <EpisodeInfo>
                <span>Quantidade de Personagens: </span>
                {episode.characters.length}
              </EpisodeInfo>
            )}
          </Link>
          <ButtonBase>
            {episode.isFavorite && episode.isFavorite === true ? (
              <BsFillHeartFill
                title="Remover dos favoritos"
                onClick={() => handleRemovefavorites(episode)}
              />
            ) : (
              <BsHeart
                title="Adicionar aos favoritos"
                onClick={() => (existsFavorites(episode) ? handleRemovefavorites(episode) : handleAddFavorites(episode))}
              />
            )}
            <ButtonComponent
              title={episode.isViewed === true ? "Episódio visualizado" : "Adicionar a lista de visualizados"}
              onClick={() => handleViewed(episode)}
            />
          </ButtonBase>
        </EpisodesCard>
      ))}
    </CardContainer>
  );
}

CardEpisodes.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  existsFavorites: PropTypes.func,
  handleRemovefavorites: PropTypes.func,
  handleAddFavorites: PropTypes.func,
  handleViewed: PropTypes.func,
};

export default CardEpisodes;
