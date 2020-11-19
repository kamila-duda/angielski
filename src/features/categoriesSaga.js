import {
    call,
    put,
    takeEvery,
    delay,
  } from "redux-saga/effects";
import store from "./../store";
import { setTestWord, startTest } from "./categoriesSlice";
  
  function* setNewWordHandler() {
    try {
      yield delay(2000);
      const words = store.getState().categories.testCategories.words;
      const index = Math.floor(Math.random() * words.length);
      yield put(setTestWord(index));
    } catch (error) {
      yield call(alert, "Coś poszło nie tak");
    }
  }
  
  export function* categoriesSaga() {
    yield takeEvery(startTest.type, setNewWordHandler);
  }
  