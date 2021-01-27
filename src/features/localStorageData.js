export const mainLocalStorageKey = "ang-categories-choose";
export const localStorageKeyQuestion = "ang-categories-question";
export const localStorageKeySound = "ang-categories-sound";
export const localStorageKeyImg = "ang-categories-images";


export const unsetLocalStorageData = (keyName) => {
  localStorage.removeItem(keyName);
};

export const setLocalStorageData = (keyName, data) => {
  localStorage.setItem(keyName, JSON.stringify(data));
};

export const getLocalStorageData = (keyName) =>
  JSON.parse(localStorage.getItem(keyName)) || [];