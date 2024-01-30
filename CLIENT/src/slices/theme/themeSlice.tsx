// // import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';

// interface ThemeState {
//   type: 'dotG' | 'unicornG' | 'hardG' | undefined;
// }

// const initialState: ThemeState = {
//   type: 'dotG',
// };

// const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     setThemeType: (state, action: PayloadAction<'dotG' | 'unicorn' | 'hardG'>) => {
//       state.type = action.payload;
//     },
//   },
// });

// export const { setThemeType } = themeSlice.actions;
// // export const themeReducer: Reducer<ThemeState> = themeSlice.reducer;
// export const themeReducer: Reducer<ThemeState, PayloadAction<'dotG' | 'unicorn' | 'hardG'>> = themeSlice.reducer;
