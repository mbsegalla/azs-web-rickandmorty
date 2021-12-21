import React, { useEffect, useState } from 'react';

import {
  getLocalFavoriteList, getLocalViewedEpisode, saveLocalEpisodesList,
  saveLocalFavoriteList, saveLocalViewedEpisode
} from '../../utils/localStorage';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import { fetchEpisodes } from '../../services/episodes';
import Favorites from './Favorites';
import CardEpisodes from '../../components/CardEpisodes';
import Viewed from './Viewed';
import { FilterContent, SectionDivider } from './styles';

function Home() {
  const [episodes, setEpisodes] = useState([]);
  const [favorites, setFavorites] = useState(getLocalFavoriteList() || []);
  const [viewed, setViewed] = useState(getLocalViewedEpisode() || []);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const loadEpisodes = async () => {
      const response = await fetchEpisodes(value, setLoading);
      if (response && response.results) {
        setEpisodes(response.results);
        saveLocalEpisodesList(response.results);
      }
    }
    loadEpisodes();
  }, [value]);

  const handleViewed = (episode) => {
    if (episode.isViewed) {
      toast.error('Episódio já adicionado aos visualizados!')
    } else {
      setViewed([...viewed, { ...episode, isViewed: true }]);
      saveLocalViewedEpisode([...viewed, { ...episode, isViewed: true }]);
      toast.success('Episódio adicionado a lista de já vistos!');
    }
  }

  const handleAddFavorites = (episode) => {
    if (favorites) {
      setFavorites([...favorites, { ...episode, isFavorite: true }]);
      saveLocalFavoriteList([...favorites, { ...episode, isFavorite: true }]);
      toast.success('Episódio adicionado aos favoritos!');
    }
  }

  const handleRemovefavorites = (episode) => {
    const filteredList = favorites.filter(favorite => favorite.id !== episode.id);
    if (filteredList) {
      setFavorites(filteredList, { ...episode });
      saveLocalFavoriteList(filteredList);
      delete filteredList.storageDate;
    }
    toast.success('Episódio removido dos favoritos!');
  };

  const existsFavorites = (episode) => {
    if (favorites && favorites.length > 0) {
      if (favorites.find(favorite => favorite.id === episode.id)) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <FilterContent>
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </FilterContent>
      {loading && <Loading />}

      <CardEpisodes
        data={episodes}
        existsFavorites={existsFavorites}
        handleAddFavorites={handleAddFavorites}
        handleRemovefavorites={handleRemovefavorites}
        handleViewed={handleViewed}
      />

      {viewed.length > 0 ? (
        <SectionDivider>
          <span>Episódios já vistos</span>
        </SectionDivider>
      ) : <></>}

      <Viewed
        viewed={viewed}
        handleViewed={handleViewed}
        existsFavorites={existsFavorites}
        handleAddFavorites={handleAddFavorites}
        handleRemovefavorites={handleRemovefavorites}
      />

      {favorites.length > 0 ? (
        <SectionDivider>
          <span>Lista de favoritos</span>
        </SectionDivider>
      ) : <></>}

      <Favorites
        favorites={favorites}
        handleRemovefavorites={handleRemovefavorites}
      />
    </>

  );
}

export default Home;
