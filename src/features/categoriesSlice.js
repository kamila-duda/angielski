import { createSlice } from "@reduxjs/toolkit";
import { words } from "./files/words";
import wrong from "./files/sounds/tryagain.mp3";
import good from "./files/sounds/goodanswer.ogg"

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: words,
    testCategories: {
      id: [],
      words: [],
      testWord: "",
      soundOn: "",
    },
    allChecked: false,
    disabledStartButton: true,
    start: false,
  },
  reducers: {
    addToTest: (state, { payload: words }) => {
      if (state.testCategories.id.indexOf(words.id) < 0) {
        state.testCategories.words = state.testCategories.words.concat(
          words.words
        );
      }
      state.disabledStartButton = false;
    },
    startTest: (state)=>{
      state.start=true;
    },
    toggleAllChecked: (state) => {
      state.allChecked = !state.allChecked;
      if (state.allChecked) {
        for (const word of words) {
          state.testCategories = state.testCategories.concat(word.words);
        }
        state.disabledStartButton = false;
      } else {
        state.disabledStartButton = true;
        state.testCategories = [];
      }
    },
    toggleCheck: (state, { payload: categoryId }) => {
      const index = state.categories.findIndex(({ id }) => id === categoryId);
      state.categories[index].border = !state.categories[index].border;
    },
    setTestWord: (state, { payload: index }) => {
      state.testCategories.testWord = state.testCategories.words[index];
      state.testCategories.soundOn = state.testCategories.sounds[index];
    },
    checkAnswer: (state, {payload: answer})=>{
      if(state.testCategories.testWord === answer){
        const sounds = new Audio(good);
        sounds.play();
      }else{
        const sounds = new Audio(wrong);
        sounds.play();
      }
    }
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
  checkAnswer,
} = categoriesSlice.actions;

const selectCategories = (state) => state.categories;
export const selectStateCategories = (state) =>
  selectCategories(state).categories;
export const selectTestCategories = (state) =>
  selectCategories(state).testCategories.words;
export const selectAnswer = (state) => selectCategories(state).answer;
export const selectAllChecked = (state) => selectCategories(state).allChecked;
export const selectStartFlag = (state) => selectCategories(state).notStart;
export const selectTestWord = (state) =>
  selectCategories(state).testCategories.testWord;
export const selectSoundOn = (state) =>
  selectCategories(state).testCategories.soundOn;

export default categoriesSlice.reducer;
