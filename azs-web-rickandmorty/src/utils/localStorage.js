export function getLocalEpisodesList() {
  return getItem('episodes-list', true);
}

export function saveLocalEpisodesList(episodesList) {
  setItem('episodes-list', episodesList, true);
}

export function getLocalFavoriteList() {
  return getItem('favorite-list', true);
}

export function saveLocalFavoriteList(favoriteList) {
  setItem('favorite-list', favoriteList, true);
}

export function getLocalViewedEpisode() {
  return getItem('viewed-list', true);
}

export function saveLocalViewedEpisode(viewedList) {
  setItem('viewed-list', viewedList, true);
}

function removeItem(item) {
  localStorage.removeItem(item);
}

function isValidStorageDate(item) {
  if (item && item.storageDate) {
    const diff = new Date() - new Date(item.storageDate);
    if (diff > (1000 * 60 * 60 * 12)) {
      return false;
    }
  }
  return true;
}

function getItem(item, isObject) {
  const foundItem = localStorage.getItem(item);
  const newFoundItem = isObject ? JSON.parse(foundItem) : foundItem;
  if (!isValidStorageDate(newFoundItem)) {
    removeItem(item);
    return undefined;
  }
  return newFoundItem;
}

function setItem(item, value, isObject) {
  let newValue = value;
  if (isObject) {
    newValue = newValue || {};
    newValue.storageDate = new Date();
  }
  localStorage.setItem(item, isObject ? JSON.stringify(newValue) : newValue);
}
