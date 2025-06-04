import {
  configureStore,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type {
  FromPortInfo,
  StatisticsData,
  ToPortInfo,
  WeekOrderCollection,
} from "../type";

interface WeekState {
  currentWeek: string;
}

interface PortsState {
  selectedPorts: string[];
}

const weekInitialState: WeekState = {
  currentWeek: "",
};

const portsInitialState: PortsState = {
  selectedPorts: [],
};

const weekSlice = createSlice({
  name: "week",
  initialState: weekInitialState,
  reducers: {
    setCurrentWeek: (state, action: PayloadAction<string>) => {
      state.currentWeek = action.payload;
    },
  },
});

const portsSlice = createSlice({
  name: "ports",
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
export const { togglePort, selectAllPorts, clearSelectedPorts } =
  portsSlice.actions;

interface LoaderState {
  loading?: boolean;
  loaded?: boolean;
  error?: string;
  data?: {
    from: FromPortInfo[];
    to: ToPortInfo[];
    week: WeekOrderCollection[];
    statistics: StatisticsData[];
  };
}
const loaderInitialState: LoaderState = {};

const loaderSlice = createSlice({
  name: "loader",
  initialState: loaderInitialState,
  reducers: {
    loaderStart(state) {
      state.loading = true;
      state.error = "";
    },
    loaderSuccess(
      state,
      action: PayloadAction<{
        from: FromPortInfo[];
        to: ToPortInfo[];
        week: WeekOrderCollection[];
        statistics: StatisticsData[];
      }>
    ) {
      state.loading = false;
      state.error = "";
      state.loaded = true;
      state.data = action.payload;
    },
    loaderFail(state, action: PayloadAction<string>) {
      state.loading = false;
      state.loaded = true;
      state.error = action.payload;
    },
  },
});

const { loaderStart, loaderSuccess, loaderFail } = loaderSlice.actions;
export { loaderStart, loaderSuccess, loaderFail };

export const store = configureStore({
  reducer: {
    week: weekSlice.reducer,
    ports: portsSlice.reducer,
    loader: loaderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
