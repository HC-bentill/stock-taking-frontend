import { createSlice } from "@reduxjs/toolkit";

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState: {
    sideMenu: false,
  },
  reducers: {
    setSideMenu: (state, action) => {
      state.sideMenu = action.payload;
    },
  },
});

// action to change the state
export const { setSideMenu } = sideMenuSlice.actions;

//selectors
export const selectSideMenu = ( state ) => state.sideMenu.sideMenu;

export default sideMenuSlice.reducer;