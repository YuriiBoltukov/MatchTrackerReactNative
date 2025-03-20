import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Match } from "../types/types";

interface MatchesState {
  allMatches: Match[];
  filteredMatches: Match[];
  loading: boolean;
  error: object | null;
}

export const initialState: MatchesState = {
  allMatches: [],
  filteredMatches: [],
  loading: false,
  error: null,
};

const matchSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setMatches(state: any, action: PayloadAction<Match[]>) {
      state.allMatches = action.payload;
      state.filteredMatches = action.payload;
    },
    setFilteredMatches(state, action: PayloadAction<Match[]>) {
      state.filteredMatches = action.payload;
    },
  },
});

export const { setMatches, setFilteredMatches } = matchSlice.actions;
export default matchSlice.reducer;
