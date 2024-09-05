// src/store/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Define theme constants
export const ThemeTypes = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

// Utility function to get the initial theme
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? ThemeTypes.DARK
    : ThemeTypes.LIGHT;
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: getInitialTheme(),
  },
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
