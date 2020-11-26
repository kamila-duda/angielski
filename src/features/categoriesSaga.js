import {
    put,
    takeEvery,
    delay,
    call,
  } from "redux-saga/effects";
import store from "./../store";
import { setTestWord, startTest, drawIndex, setError } from "./categoriesSlice";
import { setLocalStorageData, setLocalStorageDisplayImage, setLocalStorageSoundOn, setLocalStorageTestWord } from "./localStorageData";
  
  function* setNewWordHandler() {
    try {
      yield delay(1000);
      const words = store.getState().categories.testCategories.words;
      let index = Math.floor(Math.random() * words.length);
      const testWords = store.getState().categories.testWords;
      if(testWords.indexOf(index) > -1){
        index = Math.floor(Math.random() * words.length);
      }
      yield put(setTestWord(index));
      
    } catch (error) {
      yield put(setError());
    }
  };

  function* setLocalStorageDataHandler() {
    const words = store.getState().categories.testCategories.words;
    yield call(setLocalStorageData, words);
  };

  function* setLocalStorageTestDataHandler() {
    const image = store.getState().categories.displayImage;
    yield call(setLocalStorageDisplayImage, image);
    const testWord = store.getState().categories.testCategories.testWord;
    yield call(setLocalStorageTestWord, testWord);
    const soundOn = store.getState().categories.testCategories.soundOn;
    yield call(setLocalStorageSoundOn, soundOn);
  }

  export function* categoriesSaga() {
    yield takeEvery(startTest.type, setNewWordHandler);
    yield takeEvery(drawIndex.type, setNewWordHandler);
    yield takeEvery(startTest.type, setLocalStorageDataHandler);
    yield takeEvery(setTestWord.type, setLocalStorageTestDataHandler);
  }
  