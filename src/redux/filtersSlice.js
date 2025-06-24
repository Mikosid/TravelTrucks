import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    form: "",
    priceRange: [0, 100000],
  },
  reducers: {
    setFilter(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetFilters(state) {
      state.location = "";
      state.form = "";
      state.priceRange = [0, 100000];
    },
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
