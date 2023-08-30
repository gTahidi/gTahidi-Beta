import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createLesson } from './lessonService';

const initialState = {
  lessonData: {
    subject: '',
    topic: '',
    subStrand: '',
    grade: '',
    duration: '',
  },
  isError: false,
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
};

export const createNewLesson = createAsyncThunk(
  'lesson/create',
  async (lessonData, thunkAPI) => {
    try {
      const response = await createLesson(lessonData);
      return response;
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
    updateLessonData: (state, action) => {
      state.lessonData = { ...state.lessonData, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewLesson.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewLesson.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.lessonData = initialState.lessonData; 
      })
      .addCase(createNewLesson.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { updateLessonData } = lessonSlice.actions;
export default lessonSlice.reducer;
