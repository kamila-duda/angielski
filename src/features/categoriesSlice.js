import { createSlice } from "@reduxjs/toolkit";
import { words } from "./files/words";
import {
  getSessionStorageData,
  sessionStorageKeyImg,
  sessionStorageKeyQuestion,
  sessionStorageKeySound,
  mainSessionStorageKey,
} from "./sessionStorageData";
import { shuffleArray } from "./shuffleFunction";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: words,
    selectedCategories: [],
    testCategories: {
      words: getSessionStorageData(mainSessionStorageKey) || [],
      testWord: getSessionStorageData(sessionStorageKeyQuestion) || [],
      soundOn: getSessionStorageData(sessionStorageKeySound) || [],
    },
    displayImage: getSessionStorageData(sessionStorageKeyImg) || [],
    testWords: [],
    allChecked: false,
    activeStartButton: false,
    isStart: false,
    isError: false,
    progressBar: 0,
  },
  reducers: {
    selectCategory: (state, { payload: categoryId }) => {
      if (!state.selectedCategories.includes(categoryId)) {
        state.selectedCategories.push(categoryId);
      } else {
        const index = state.selectedCategories.findIndex(
          (id) => id === categoryId
        );
        state.selectedCategories.splice(index, 1);
      }
      if (state.selectedCategories.length > 0) {
        state.activeStartButton = true;
      } else {
        state.activeStartButton = false;
      }
      const index = state.categories.findIndex(({ id }) => id === categoryId);
      state.categories[index].border = !state.categories[index].border;
    },
    toggleAllChecked: (state) => {
      state.allChecked = !state.allChecked;
      if (state.allChecked) {
        state.activeStartButton = true;
        for (const category of state.categories) {
          category.border = true;
        }
      } else {
        for (const category of state.categories) {
          category.border = false;
        }
        state.activeStartButton = false;
      }
    },
    startTest: (state) => {
      state.displayImage = [];
      if (!state.isStart) {
        for (const category of state.categories) {
          if (category.border) {
            state.testCategories.words = state.testCategories.words.concat(
              category.words
            );
          }
        }
        state.isStart = true;
      }
    },
    drawIndex: (state) => {
      state.isLoading = true;
      state.displayImage = [];
    },
    upProgress: (state) => {
      state.progressBar= state.progressBar+10;
    },
    downProgress: (state) => {
      if(state.progressBar>0){
      state.progressBar = state.progressBar-10;
      }
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
    setError: (state) => {
      state.isError = true;
    },
    resetTest: (state) => {
      state.testCategories = { words: [], testWord: [], soundOn: [] };
      state.activeStartButton = false;
      state.isStart = false;
      state.allChecked = false;
      state.displayImage = [];
      state.selectedCategories = [];
      for (const category of state.categories) {
        category.border = false;
      }
    },
  },
});

export const {
  selectCategory,
  setAnswer,
  setChecked,
  toggleAllChecked,
  setTestWord,
  startTest,
  setError,
  checkAnswer,
  drawIndex,
  resetTest,
  upProgress,
  downProgress,
} = categoriesSlice.actions;

const selectCategories = (state) => state.categories;
export const selectStateCategories = (state) =>
  selectCategories(state).categories;
export const selectTestCategories = (state) =>
  selectCategories(state).displayImage;
export const selectAnswer = (state) => selectCategories(state).answer;
export const selectAllChecked = (state) => selectCategories(state).allChecked;
export const selectStartFlag = (state) =>
  selectCategories(state).activeStartButton;
export const selectTestWord = (state) =>
  selectCategories(state).testCategories.testWord;
export const selectTestWords = (state) => selectCategories(state).testWords;
export const selectSoundOn = (state) =>
  selectCategories(state).testCategories.soundOn;
export const selectIsLoading = (state) => selectCategories(state).isLoading;
export const selectIsError = (state) => selectCategories(state).isError;
export const selectProgress = (state) => selectCategories(state).progressBar;

export default categoriesSlice.reducer;
