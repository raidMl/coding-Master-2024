import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url2 } from "./api";

const initialState = {
  studentInfo: null,
  isLoading: false,
  error: null,
  
};

export const fetchStudentInfo = createAsyncThunk(
  "info/fetchStudentInfo",
  async ({ rejectWithValue }) => {
    try {
        const response = await axios.get(url2, {
            headers: {
              Authorization: `${token}`,
            },
          });
    
          // Assuming you have the token stored in your Redux store
          const token = localStorage.getItem("token"); // Retrieve the token from your Redux store
    
         
    
          return response.data; // Return student info
      // Return student info
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchStudentInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.studentInfo = action.payload;
      })
      .addCase(fetchStudentInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default infoSlice.reducer;
