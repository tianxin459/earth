import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface WeekState {
  currentWeek: string;
}

interface PortsState {
  selectedPorts: string[];
}

const weekInitialState: WeekState = {
  currentWeek: '',
};

const portsInitialState: PortsState = {
  selectedPorts: [],
};

const weekSlice = createSlice({
  name: 'week',
  initialState: weekInitialState,
  reducers: {
    setCurrentWeek: (state, action: PayloadAction<string>) => {
      state.currentWeek = action.payload;
    },
  },
});

const portsSlice = createSlice({
  name: 'ports',
  initialState: portsInitialState,
  reducers: {
    togglePort: (state, action: PayloadAction<string>) => {
      const port = action.payload;
      const index = state.selectedPorts.indexOf(port);
      if (index === -1) {
        state.selectedPorts.push(port);
      } else {
        state.selectedPorts.splice(index, 1);
      }
    },
    selectAllPorts: (state, action: PayloadAction<string[]>) => {
      state.selectedPorts = action.payload;
    },
    clearSelectedPorts: (state) => {
      state.selectedPorts = [];
    },
  },
});

export const { setCurrentWeek } = weekSlice.actions;
export const { 
  togglePort,
  selectAllPorts,
  clearSelectedPorts 
} = portsSlice.actions;

export const store = configureStore({
  reducer: {
    week: weekSlice.reducer,
    ports: portsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;