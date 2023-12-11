
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShopState {
  selectedSiteSecondeType: string;
  isThirdBlockVisible: boolean;
  isSiteChecked: boolean;
  isFourthBlockVisible: boolean;
}

const initialState: ShopState = {
  selectedSiteSecondeType: '',
  isThirdBlockVisible: false,
  isSiteChecked: false,
  isFourthBlockVisible: false,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSelectedSiteSecondeType(state, action: PayloadAction<string>) {
      state.selectedSiteSecondeType = action.payload;
    },
    setIsThirdBlockVisible(state, action: PayloadAction<boolean>) {
      state.isThirdBlockVisible = action.payload;
    },
    setIsSiteChecked(state, action: PayloadAction<boolean>) {
      state.isSiteChecked = action.payload;
    },
    setIsFourthBlockVisible(state, action: PayloadAction<boolean>) {
      state.isFourthBlockVisible = action.payload;
    },
  },
});

export const {
  setSelectedSiteSecondeType,
  setIsThirdBlockVisible,
  setIsSiteChecked,
  setIsFourthBlockVisible,
} = shopSlice.actions;

export default shopSlice.reducer;
