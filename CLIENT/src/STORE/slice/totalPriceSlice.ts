
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TotalPriceState {
  value: number;
}

const initialState: TotalPriceState = {
  value: 0,
};

const totalPriceSlice = createSlice({
  name: 'totalPrice',
  initialState,
  reducers: {
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.value = action.payload;

      console.log('toatl price slice state.value : ' ,  state.value)
    },
  },
});


export const { setTotalPrice } = totalPriceSlice.actions;
export default totalPriceSlice.reducer;
