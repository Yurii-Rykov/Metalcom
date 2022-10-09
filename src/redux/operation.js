import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://metalkom.herokuapp.com/api';

export const getCatalogs = createAsyncThunk('catalogs/all', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`/catalogs/all`);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const sendEmail = createAsyncThunk('email/upload', async ({ file, data }, { rejectWithValue, dispatch }) => {
    if (file) {
        const formData = new FormData();
        formData.append('file', file);
        try {
            await axios.post('/email/upload', formData);
            console.log('finis');
            dispatch(sendingEmail(data));
            return;
        } catch (error) {
            return rejectWithValue(error);
            // console.log('Upload error: ', error);
        }
    }
    // try {
    //     await axios.post('/email', data);
    // } catch (error) {
    //     return rejectWithValue(error);
    //     // console.log('Send email error: ', error);
    // }
});

export const sendingEmail = createAsyncThunk('email/send', async (data, { rejectWithValue }) => {
    console.log('????');
    try {
        await axios.post('/email', data);
        return;
    } catch (error) {
        return rejectWithValue(error);
        // console.log('Send email error: ', error);
    }
});
