import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("employee/fetchData", async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data;
});

const initialState = {
  isLoading: false,
  employees: [],
  isError: false,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    extraReducers: (builder) => {
      builder.addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employees = action.payload;
      });
      builder.addCase(fetchData.rejected, (state, action) => {
        state.isError = true;
        console.log(action.payload);
      });
    },
  },
});

export default employeeSlice.reducer;
