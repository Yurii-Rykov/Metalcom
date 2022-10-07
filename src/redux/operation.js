import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4000/api';

export const getCatalogs = createAsyncThunk('catalogs/all', async (date, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`/catalogs/all`);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});
