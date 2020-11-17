import { createSlice } from '@reduxjs/toolkit';
import { words } from './words';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: words,
    testCategories: [],
    allChecked: false,
    notStart: true,
  },
  reducers: {
   addToTest: (state, {payload: words}) => {
      state.testCategories= state.testCategories.concat(words);
      state.notStart = false;
    },
    setAllChecked: (state) => {
      for (const category of state.categories) { 
        category.border = true;
      };
    },
    toggleAllChecked: (state) => {
      state.allChecked = !state.allChecked;
      if (state.allChecked) {
        for(const word of words){
          state.testCategories= state.testCategories.concat(word.words)
        };
      state.notStart=false;
    } else{
      state.notStart=true;
    };
    },
    toggleCheck: (state, {payload: categoryId}) => {
      const index = state.categories.findIndex(({ id }) => id === categoryId);
      state.categories[index].border = !state.categories[index].border;
    },
  },
});

export const { addToTest, toggleCheck, setAnswer, setAllChecked, toggleAllChecked } = categoriesSlice.actions;

const selectCategories = state => state.categories;
export const selectTestCategories = (state) => selectCategories(state).testCategories;
export const selectAnswer = state => selectCategories(state).answer;
export const selectAllChecked = state => selectCategories(state).allChecked;
export const selectStartFlag = state => selectCategories(state).notStart;

export default categoriesSlice.reducer;
