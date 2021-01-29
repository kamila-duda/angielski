import { put, takeEvery, delay, call } from "redux-saga/effects";
import store from "../store";
import {
  setTestWord,
  startTest,
  drawIndex,
  setError,
  resetTest,
} from "./testSlice";
import {
  sessionStorageKeyImg,
  sessionStorageKeyQuestion,
  sessionStorageKeySound,
  mainSessionStorageKey,
  setSessionStorageData,
  unsetSessionStorageData,
} from "./sessionStorageData";

function* setNewWordHandler() {
  try {
    yield delay(1000);
    const words = store.getState().categories.testCategories.words;
    let index;
    const testWords = store.getState().categories.testWords;
    do {
      index = Math.floor(Math.random() * words.length);
    } while (testWords.indexOf(index) > -1);
    yield put(setTestWord(index));
  } catch (error) {
    yield put(setError());
  }
}

function* setSessionStorageDataHandler() {
  const words = store.getState().categories.testCategories.words;
  yield call(setSessionStorageData, mainSessionStorageKey, words);
}

function* setSessionStorageTestDataHandler() {
  const data = store.getState().categories.testCategories.testWord;
  yield call(setSessionStorageData, sessionStorageKeyQuestion, data);

  const image = store.getState().categories.displayImage;
  yield call(setSessionStorageData, sessionStorageKeyImg, image);
  const soundOn = store.getState().categories.testCategories.soundOn;
  yield call(setSessionStorageData, sessionStorageKeySound, soundOn);
}
function* unsetSessionStorageDataHandler() {
  yield call(unsetSessionStorageData, mainSessionStorageKey);
  yield call(unsetSessionStorageData, sessionStorageKeyQuestion);
  yield call(unsetSessionStorageData, sessionStorageKeySound);
  yield call(unsetSessionStorageData, sessionStorageKeyImg);
}

export function* testSaga() {
  yield takeEvery(startTest.type, setSessionStorageDataHandler);
  yield takeEvery(startTest.type, setNewWordHandler);
  yield takeEvery(drawIndex.type, setNewWordHandler);
  yield takeEvery(setTestWord.type, setSessionStorageTestDataHandler);
  yield takeEvery(resetTest.type, unsetSessionStorageDataHandler);
}
