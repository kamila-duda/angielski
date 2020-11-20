import { createSlice } from "@reduxjs/toolkit";
import { words } from "./files/words";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: words,
    testCategories: {
      words: [],
      testWord: "",
      soundOn: "",
    },
    displayImage:[],
    allChecked: false,
    disabledStartButton: true,
    isStart: false,
    isError: false,
  },
  reducers: {
    addToTest: (state) => {
      state.disabledStartButton = false;
    },
    startTest: (state, { payload: categories }) => {
      for (const category of categories) {
        if (category.border && state.isStart === false) {
          state.testCategories.words = state.testCategories.words.concat(
            category.words
          );
        }
      }
      state.isStart = true;
    },
    toggleAllChecked: (state, { payload: categories }) => {
      state.allChecked = !state.allChecked;
      if (state.allChecked) {
        state.disabledStartButton = false;
      } else {
        for (const category of categories) {
          if (category.border) {
            const index = state.categories.findIndex(
              ({ id }) => id === category.id
            );
            state.categories[index].border = false;
          }
        }
        state.disabledStartButton = true;
      }
    },
    toggleCheck: (state, { payload: categoryId }) => {
      const index = state.categories.findIndex(({ id }) => id === categoryId);
      state.categories[index].border = !state.categories[index].border;
    },
    setTestWord: (state, { payload: index }) => {
      state.isLoading = false;
      state.testCategories.testWord = state.testCategories.words[index].title;
      state.testCategories.soundOn = state.testCategories.words[index].sounds;
      for(let i = 0; i<3; i++){
        const wordIndex = Math.floor(Math.random()*state.testCategories.words.length);
        state.displayImage.push(state.testCategories.words[wordIndex]);
      }
      state.displayImage.push(state.testCategories.words[index])
    },
    drawIndex: (state) => {
      state.isLoading = true;
      state.displayImage = [];
    },
    setError: (state) => {
      state.isError = true;
    },
  },
});

export const {
  addToTest,
  toggleCheck,
  setAnswer,
  setChecked,
  toggleAllChecked,
  setTestWord,
  startTest,
  setError,
  checkAnswer,
  drawIndex,
} = categoriesSlice.actions;

const selectCategories = (state) => state.categories;
export const selectStateCategories = (state) =>
  selectCategories(state).categories;
export const selectTestCategories = (state) =>
  selectCategories(state).displayImage;
export const selectAnswer = (state) => selectCategories(state).answer;
export const selectAllChecked = (state) => selectCategories(state).allChecked;
export const selectStartFlag = (state) =>
  selectCategories(state).disabledStartButton;
export const selectTestWord = (state) =>
  selectCategories(state).testCategories.testWord;
export const selectSoundOn = (state) =>
  selectCategories(state).testCategories.soundOn;
  export const selectIsError = (state) =>
  selectCategories(state).isError;

export default categoriesSlice.reducer;
