import { takeEvery, call } from "redux-saga/effects";
import store from "../store";
import {
  setSessionStorageData,
  unsetSessionStorageData,
  sessionStorageKeyRepeted,
} from "./sessionStorageData";
import { resetState, selectCategory } from "./wordsSlice";

function* setSessionStorageDataHandler() {
  const words = store.getState().words.selectedWords;
  yield call(setSessionStorageData, sessionStorageKeyRepeted, words);
}

function* unsetSessionStorageDataHandler() {
  yield call(unsetSessionStorageData, sessionStorageKeyRepeted);
}

export function* wordsSaga() {
  yield takeEvery(selectCategory.type, setSessionStorageDataHandler);
  yield takeEvery(resetState.type, unsetSessionStorageDataHandler);
}
