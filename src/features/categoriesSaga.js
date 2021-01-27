import { put, takeEvery, delay, call } from "redux-saga/effects";
import store from "./../store";
import {
  setTestWord,
  startTest,
  drawIndex,
  setError,
  resetTest,
  toggleCheck,
  activeStartButton
} from "./categoriesSlice";
import {
  localStorageKeyImg,
  localStorageKeyQuestion,
  localStorageKeySound,
  mainLocalStorageKey,
  setLocalStorageData,
  unsetLocalStorageData,
} from "./localStorageData";

function* setNewWordHandler() {
  try {
    yield delay(1000);
    const words = store.getState().categories.testCategories.words;
    let index = Math.floor(Math.random() * words.length);
    const testWords = store.getState().categories.testWords;
    if (testWords.indexOf(index) > -1) {
      index = Math.floor(Math.random() * words.length);
    }
    yield put(setTestWord(index));
  } catch (error) {
    yield put(setError());
  }
}

function* setLocalStorageDataHandler() {
  const words = store.getState().categories.testCategories.words;
  yield call(setLocalStorageData, mainLocalStorageKey, words);
}

function* setLocalStorageTestDataHandler() {
  const data = store.getState().categories.testCategories.testWord;
  yield call(setLocalStorageData, localStorageKeyQuestion, data);

  const image = store.getState().categories.displayImage;
  yield call(setLocalStorageData, localStorageKeyImg, image);
  const soundOn = store.getState().categories.testCategories.soundOn;
  yield call(setLocalStorageData, localStorageKeySound, soundOn);
}
function* unsetLocalStorageDataHandler() {
  yield call(unsetLocalStorageData, mainLocalStorageKey);
  yield call(unsetLocalStorageData, localStorageKeyQuestion);
  yield call(unsetLocalStorageData, localStorageKeySound);
  yield call(unsetLocalStorageData, localStorageKeyImg);
}

export function* categoriesSaga() {
  yield takeEvery(startTest.type, setLocalStorageDataHandler);
  yield takeEvery(startTest.type, setNewWordHandler);
  yield takeEvery(drawIndex.type, setNewWordHandler);
  yield takeEvery(setTestWord.type, setLocalStorageTestDataHandler);
  yield takeEvery(resetTest.type, unsetLocalStorageDataHandler);
}
