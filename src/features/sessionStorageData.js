export const mainSessionStorageKey = "ang-categories-choose";
export const sessionStorageKeyQuestion = "ang-categories-question";
export const sessionStorageKeySound = "ang-categories-sound";
export const sessionStorageKeyImg = "ang-categories-images";
export const sessionStorageKeyRepeted = "ang-words-repeted";


export const unsetSessionStorageData = (keyName) => {
  sessionStorage.removeItem(keyName);
};

export const setSessionStorageData = (keyName, data) => {
  sessionStorage.setItem(keyName, JSON.stringify(data));
};

export const getSessionStorageData = (keyName) =>
  JSON.parse(sessionStorage.getItem(keyName)) || [];