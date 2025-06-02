import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface WeekState {
  currentWeek: string;
}

const initialState: WeekState = {
  currentWeek: '',
};

const weekSlice = createSlice({
  name: 'week',
  initialState,
  reducers: {
    setCurrentWeek: (state, action: PayloadAction<string>) => {
      state.currentWeek = action.payload;
    },
  },
});

export const { setCurrentWeek } = weekSlice.actions;

export const store = configureStore({
  reducer: {
    week: weekSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;