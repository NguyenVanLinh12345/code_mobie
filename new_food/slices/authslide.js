import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {
    id: null,
    name: "",
    accessToken: null,
    refreshToken: null
  },
};

export const authSlide = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setAuth  : (state ,  action) => {
        state.auth  = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlide.actions;


export const selectAuth  = (state) => state.auth.auth


export default authSlide.reducer;
