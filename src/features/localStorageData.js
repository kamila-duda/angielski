const mainLocalStorageKey = "ang-categories";
const localStorageKey = "ang-categories-display-image";
const localStorageKeyWord = "ang-categories-word";
const localStorageKeySound = "ang-categories-sound";

export const setLocalStorageData = (words) => {
  localStorage.setItem(mainLocalStorageKey, JSON.stringify(words));
};

export const getLocalStorageData = () =>
  JSON.parse(localStorage.getItem(mainLocalStorageKey)) || [];

export const setLocalStorageDisplayImage = (image) => {
  localStorage.setItem(localStorageKey, JSON.stringify(image));
};

export const getLocalStorageDisplayImage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];

export const setLocalStorageTestWord = (word) => {
  localStorage.setItem(localStorageKeyWord, JSON.stringify(word));
};

export const getLocalStorageTestWord = () =>
  JSON.parse(localStorage.getItem(localStorageKeyWord)) || [];

export const setLocalStorageSoundOn = (sound) => {
  localStorage.setItem(localStorageKeySound, JSON.stringify(sound));
};

export const getLocalStorageSoundOn = () =>
  JSON.parse(localStorage.getItem(localStorageKeySound)) || [];
