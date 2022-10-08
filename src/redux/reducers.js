import { createSlice } from '@reduxjs/toolkit';
import { getCatalogs } from './operation';
import { ua, ru } from '../localization';

const initialState = {
    catalogs: [],
    lang: ua,
    isLoading: false,
};

const catalogsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        languageSelection: (state, action) => {
            state.lang = action.payload === 'ua' ? ua : ru;
        },
    },
    extraReducers: {
        [getCatalogs.pending]: state => {
            state.isLoading = true;
        },

        [getCatalogs.fulfilled]: (state, action) => {
            state.catalogs = action.payload;
            state.isLoading = false;
        },

        [getCatalogs.rejected]: (state, action) => {
            state.isLoading = false;
            console.error(`Getting catalogs error: ${action.payload.message}`);
        },
    },
});

export const { languageSelection } = catalogsSlice.actions;
export default catalogsSlice.reducer;
