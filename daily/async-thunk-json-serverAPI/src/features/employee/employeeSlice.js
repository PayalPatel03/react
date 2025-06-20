import { createSlice } from "@reduxjs/toolkit";


const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {},
});

export const employeeReducer = employeeSlice.reducer;
export default employeeSlice.reducer;
