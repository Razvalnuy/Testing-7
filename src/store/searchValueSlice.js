import { createSlice } from "@reduxjs/toolkit";

const searchValue = createSlice({
  name: "searchValue",
  initialState: {
    value: "",
  },

  reducers: {
    typingNewValue(state, action) {
      state.value = action.payload;
    },
  },
});

export default searchValue.reducer;
export const { typingNewValue } = searchValue.actions;
