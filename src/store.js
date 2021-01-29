import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import testReducer from "./features/testSlice";
import wordsReducer from "./features/wordsSlice";
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
      categories: testReducer,
      words: wordsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;