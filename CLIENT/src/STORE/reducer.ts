import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SiteOptions {
  sites: boolean;
  landing: boolean;
  multipage: boolean;
  store: boolean;
  individual: boolean;
  template: boolean;
}

interface DesignOptions {
  design: boolean;
  logo: boolean;
  brandColors: boolean;
  customIcons: boolean;
  customImages: boolean;
  urgent: boolean;
}

interface CategoryOptions {
  option1: boolean;
  option2: boolean;
  // Добавьте другие опции для категории
}

interface ShopPageState {
  siteOptions: SiteOptions;
  designOptions: DesignOptions;
  categoryOptions: CategoryOptions;
}

const initialState: ShopPageState = {
  siteOptions: {
    sites: false,
    landing: false,
    multipage: false,
    store: false,
    individual: false,
    template: false,
  },
  designOptions: {
    design: false,
    logo: false,
    brandColors: false,
    customIcons: false,
    customImages: false,
    urgent: false,
  },
  categoryOptions: {
    option1: false,
    option2: false,
    // Добавьте начальные значения для других опций
  },
};

const shopPageSlice = createSlice({
  name: 'shopPage',
  initialState,
  reducers: {
    toggleSiteOption: (state, action: PayloadAction<keyof SiteOptions>) => {
      const key = action.payload;
      state.siteOptions[key] = !state.siteOptions[key];
    },
    toggleDesignOption: (state, action: PayloadAction<keyof DesignOptions>) => {
      const key = action.payload;
      state.designOptions[key] = !state.designOptions[key];
    },
    toggleCategoryOption: (state, action: PayloadAction<keyof CategoryOptions>) => {
      const key = action.payload;
      state.categoryOptions[key] = !state.categoryOptions[key];
    },
    // Добавьте другие редьюсеры для других опций
  },
});

export const {
  toggleSiteOption,
  toggleDesignOption,
  toggleCategoryOption,
  // Другие экшены
} = shopPageSlice.actions;

export const shopPageReducer = shopPageSlice.reducer;
