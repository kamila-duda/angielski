import {all} from "redux-saga/effects";
import { testSaga } from "./features/testSaga";
import {wordsSaga} from "./features/wordsSaga";

export default function* rootSaga() {
    yield all([
        testSaga(),
        wordsSaga(),
    ]);
}