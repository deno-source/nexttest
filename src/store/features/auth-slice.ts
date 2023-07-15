import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "demo",
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    change(state, action: PayloadAction<string>) {
      let obj = {
        value: {
          name: action.payload,
        },
      };

      return obj;
    },
  },
});

export const { change } = auth.actions;
export default auth.reducer;
