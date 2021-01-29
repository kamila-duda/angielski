import {all} from "redux-saga/effects";
import { testSaga } from "./features/testSaga";

export default function* rootSaga() {
    yield all([
        testSaga(),
    ]);
}