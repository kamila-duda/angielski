import {all} from "redux-saga/effects";
import { categoriesSaga } from "./features/categoriesSaga";

export default function* rootSaga() {
    yield all([
        categoriesSaga()
    ]);
}