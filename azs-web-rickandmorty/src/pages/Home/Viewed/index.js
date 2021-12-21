import React from 'react';

import PropTypes from 'prop-types';
import CardEpisodes from '../../../components/CardEpisodes';

function Viewed({ viewed, handleViewed, existsFavorites, handleAddFavorites, handleRemovefavorites }) {
  return (
    <CardEpisodes
      data={viewed}
      handleViewed={handleViewed}
      existsFavorites={existsFavorites}
      handleAddFavorites={handleAddFavorites}
      handleRemovefavorites={handleRemovefavorites}
    />
  );
}

Viewed.propTypes = {
  viewed: PropTypes.arrayOf(PropTypes.shape({})),
  handleViewed: PropTypes.func,
  existsFavorites: PropTypes.func,
  handleRemovefavorites: PropTypes.func,
  handleAddFavorites: PropTypes.func,
};

export default Viewed;
