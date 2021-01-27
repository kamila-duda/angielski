import { createSlice } from "@reduxjs/toolkit";
import { words } from "./files/words";
import {
  getLocalStorageData,
  localStorageKeyImg,
  localStorageKeyQuestion,
  localStorageKeySound,
  mainLocalStorageKey,
} from "./localStorageData";
import { shuffleArray } from "./shuffleFunction";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: words,
    testCategories:
      {
        words: getLocalStorageData(mainLocalStorageKey),
        testWord: getLocalStorageData(localStorageKeyQuestion),
        soundOn: getLocalStorageData(localStorageKeySound),
      } || {},
    displayImage: getLocalStorageData(localStorageKeyImg) || [],
    testWords: [],
    allChecked: false,
    disabledStartButton: true,
    isStart: false,
    isError: false,
  },
  reducers: {
    addToTest: (state) => {
      state.disabledStartButton = false;
    },
    startTest: (state) => {
      state.testCategories.words = [];
      state.testCategories.testWord = "";
      state.testCategories.soundOn = "";
      state.displayImage = [];
      for (const category of state.categories) {
        if (category.border && state.isStart === false) {
          state.testCategories.words = state.testCategories.words.concat(
            category.words
          );
        }
      }
      state.isStart = true;
    },
    toggleAllChecked: (state) => {
      state.allChecked = !state.allChecked;
      if (state.allChecked) {
        state.disabledStartButton = false;
        for (const category of state.categories) {
          category.border = true;
        }
      } else {
        for (const category of state.categories) {
          category.border = false;
        }
        state.disabledStartButton = true;
      }
    },
    toggleCheck: (state, { payload: categoryId }) => {
      state.isStart = false;
      const index = state.categories.findIndex(({ id }) => id === categoryId);
      state.categories[index].border = !state.categories[index].border;
    },
    setTestWord: (state, { payload: index }) => {
      state.isLoading = false;
      state.testCategories.testWord = state.testCategories.words[index].title;
      state.testWords.push(index);
      state.testCategories.soundOn = state.testCategories.words[index].sounds;
      state.displayImage.push(state.testCategories.words[index]);
      let indexArray = [];
      for (let i = 0; i < 3; i++) {
        const wordIndex = Math.floor(
          Math.random() * state.testCategories.words.length
        );
        if (indexArray.indexOf(wordIndex) > -1) {
          i--;
        } else {
          if (
            state.displayImage.indexOf(state.testCategories.words[wordIndex]) >
            -1
          ) {
            i--;
          } else {
            indexArray.push(wordIndex);
            state.displayImage.push(state.testCategories.words[wordIndex]);
          }
        }
      }
      shuffleArray(state.displayImage);
    },
    drawIndex: (state) => {
      state.isLoading = true;
      state.displayImage = [];
    },
    setError: (state) => {
      state.isError = true;
    },
    resetTest: (state) => {
      state.testCategories = {};
      state.disabledStartButton = true;
      state.isStart = false;
      state.allChecked = false;
      state.displayImage = [];
      for (const category of state.categories) {
        category.border = false;
      }
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
  resetTest,
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
export const selectTestWords = (state) => selectCategories(state).testWords;
export const selectSoundOn = (state) =>
  selectCategories(state).testCategories.soundOn;
export const selectIsError = (state) => selectCategories(state).isError;

export default categoriesSlice.reducer;
