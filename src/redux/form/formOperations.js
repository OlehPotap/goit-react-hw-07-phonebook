import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'


axios.defaults.baseURL = 'https://628b5712667aea3a3e2d1b76.mockapi.io/contacts/contacts';

export const getContactsList = createAsyncThunk(
    'contacts/get',
    async () => {
        const {data} = await axios.get('/')
        
        return data;
    }
)

export const postContactsList = createAsyncThunk(
    'contacts/post',
    async (data) => {
        const {data: result} = await axios.post('/', data)
        return result;
    }
)

export const delContactsList = createAsyncThunk(
    'contacts/del',
    async (id) => {
        const {data} = await axios.delete(`/${id}`)
        return data.id;
    }
)


