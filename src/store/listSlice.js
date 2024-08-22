import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
    individual: {},
  },

  reducers: {
    searchRepositories(state, action) {
      state.list = [...action.payload];
    },

    individualData(state, action) {
      const { name, description, license, stargazers_count } = action.payload;
      console.log(`work`);
      state.individual = {
        isActive: true,
        name,
        description,
        stargazers_count,
        license: license.key,
      };
    },
  },
});

export default listSlice.reducer;
export const { searchRepositories, individualData } = listSlice.actions;
