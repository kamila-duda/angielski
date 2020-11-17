import {
    takeLatest,
    call,
    put,
    takeEvery,
    select,
    delay,
  } from "redux-saga/effects";
  
  
  function* setNewWordHandler() {
    try {
      yield delay(1000);
      const exampleTasks = yield call(getExampleTasks);
      yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
      yield call(alert, "Coś poszło nie tak");
      yield put(fetchExampleTasksError());
    }
  }
  function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
  }
  
  export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
  }
  