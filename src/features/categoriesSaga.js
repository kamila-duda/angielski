import {
    put,
    takeEvery,
    delay,
  } from "redux-saga/effects";
import store from "./../store";
import { setTestWord, startTest, drawIndex, setError } from "./categoriesSlice";
  
  function* setNewWordHandler() {
    try {
      yield delay(1000);
      const words = store.getState().categories.testCategories.words;
      const index = Math.floor(Math.random() * words.length);
      yield put(setTestWord(index));
    } catch (error) {
      yield put(setError());
    }
  }
  export function* categoriesSaga() {
    yield takeEvery(startTest.type, setNewWordHandler);
    yield takeEvery(drawIndex.type, setNewWordHandler);
  }
  