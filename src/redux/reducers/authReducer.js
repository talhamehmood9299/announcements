import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  selectedLocation: "",
  selectedLocationId: "",
  selectedAddress: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true");
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.selectedLocation = "";
      state.selectedLocationId = "";
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload.location;
      state.selectedLocationId = action.payload.locationId;
      state.selectedAddress = action.payload.address;
    },
  },
});

export const { login, logout, setSelectedLocation } = authSlice.actions;
export default authSlice.reducer;
