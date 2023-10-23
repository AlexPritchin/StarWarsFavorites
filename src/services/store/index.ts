import { store } from "./store";
import type { RootState, AppDispatch } from "./store";
import { reset, selectIsFavorite, selectStatisticsMemoized, toggleFavorite } from "./favoritesSlice";

export type {
  RootState,
  AppDispatch,
}

export {
  store,
  reset,
  selectIsFavorite,
  selectStatisticsMemoized,
  toggleFavorite,
};
