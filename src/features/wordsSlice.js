import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";
import { words } from "./files/words";
import { getSessionStorageData, sessionStorageKeyRepeted } from "./sessionStorageData";

export const wordsSlice = createSlice({
  name: "words",
  initialState: {
    wordsCategories: words,
    selectedWords: getSessionStorageData(sessionStorageKeyRepeted) || [],
    isError: false,
  },
  reducers: {
    selectCategory: (state, { payload: categoryId }) => {
        const index = state.wordsCategories.findIndex(({ id }) => id === categoryId);
        state.selectedWords = state.wordsCategories[index].words;
    },
    setError: (state) => {
      state.isError = true;
    },
    resetState: (state) => {
        state.selectedWords = [];
    },
  },
});

export const {
  selectCategory,
  setError,
  resetState,
} = wordsSlice.actions;

const selectWords = (state) => state.words;
export const selectStateCategories = (state) =>
  selectWords(state).wordsCategories;
export const selectedWords = (state) =>
  selectWords(state).selectedWords;
export const selectIsError = (state) => selectWords(state).isError;

export default wordsSlice.reducer;
