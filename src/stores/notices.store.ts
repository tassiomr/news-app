import { create } from "zustand";

const initialState = {
  us: null,
  world: null,
  arts: null,
  home: null,
  science: null,
};

const store = create(() => ({
  ...initialState,
}));

export default store;
