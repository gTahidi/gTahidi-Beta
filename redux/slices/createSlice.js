import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  response: null,
};

// Define an async thunk for making the API request
export const createLessonPlan = createAsyncThunk(
  "dashboard/createLessonPlan",
  async (data) => {
    const url =
      "https://ailogic.openai.azure.com/openai/deployments/gtahidiAI/chat/completions?api-version=2023-03-15-preview";

    const apiKey = "7052b7dc980e44e3a52ec96cb9bf3792";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createLessonPlan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createLessonPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(createLessonPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
