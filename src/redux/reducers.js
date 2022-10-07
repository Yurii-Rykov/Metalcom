import { createSlice } from '@reduxjs/toolkit';
import { getCatalogs } from './operation';

const initialState = {
    catalogs: [],
    isLoading: false,
};

const catalogsSlice = createSlice({
    name: 'statistics',
    initialState,
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

export default catalogsSlice.reducer;
