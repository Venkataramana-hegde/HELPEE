import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface RatingState {
  value: number;
}

const initialState: RatingState = {
  value: 0,
};

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setRating } = ratingSlice.actions;
export default ratingSlice.reducer;
