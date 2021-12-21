import React from 'react';

import PropTypes from 'prop-types';
import CardEpisodes from '../../../components/CardEpisodes';

function Favorites({ favorites, handleRemovefavorites }) {
  return (
    <CardEpisodes
      data={favorites}
      handleRemovefavorites={handleRemovefavorites}
    />
  );
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({})),
  handleRemovefavorites: PropTypes.func,
}

export default Favorites;
