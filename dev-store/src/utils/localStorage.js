export function getLocalProductList() {
  return getItem('product-list', true);
}

export function saveLocalProductList(ProductList) {
  setItem('product-list', ProductList, true);
}

export function removeLocalProductList() {
  removeItem('product-list');
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
  }
  localStorage.setItem(item, isObject ? JSON.stringify(newValue) : newValue);
}

function removeItem(item) {
  localStorage.removeItem(item);
}

function isValidStorageDate(item) {
  if (item && item.storageDate) {
    const diff = new Date() - new Date(item.storageDate);
    if (diff > (100 * 60 * 60 * 12)) {
      return false;
    }
  }
  return true;
}
