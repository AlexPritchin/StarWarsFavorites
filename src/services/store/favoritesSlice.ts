import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface FavoritesState {
  male: number;
  female: number;
  other: number;
  likedIds: Array<boolean>;
}

interface ToggleFavoritePayload {
  characterId: number;
  characterGender: string;
}

const initialState: FavoritesState = {
  male: 0,
  female: 0,
  other: 0,
  likedIds: Array.from({ length: 82 }, (item) => false),
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<ToggleFavoritePayload>) => {
      const { characterId: id, characterGender: gender } = action.payload;
      const unifiedGender = gender === 'male' || gender === 'female' ? gender : 'other';
      state.likedIds[id] = !state.likedIds[id];
      if (state.likedIds[id]) {
        state[unifiedGender]++;
      } else {
        state[unifiedGender]--;
      }
    },
    reset: (state) => {
      return initialState;
    },
  },
});

export const { toggleFavorite, reset } = favoritesSlice.actions;

const selectStatistics = ({ favorites: { male, female, other } }: RootState) => {
  return {
    male,
    female,
    other,
    total: male + female + other,
  };
};

export const selectStatisticsMemoized = createSelector(selectStatistics, (result) => result);

export const selectIsFavorite = ({ favorites: { likedIds } }: RootState, id: number) => likedIds[id];

export default favoritesSlice.reducer;
