import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';


axios.defaults.baseURL = 'https://628b5712667aea3a3e2d1b76.mockapi.io/contacts/contacts';

export const getContactsList = createAsyncThunk(
    'contacts/get',
    async () => {
        try {
            const {data} = await axios.get('/')
            return data;
        } catch (error) {
            Notiflix.Notify.failure(`Server responed with error: ${error}`);
        }
    }
)

export const postContactsList = createAsyncThunk(
    'contacts/post',
    async (data) => {
        try {
            const {data: result} = await axios.post('/', data)
        return result;
        } catch (error) {
            Notiflix.Notify.failure(`Server responed with error: ${error}`);
        }
    }
)

export const delContactsList = createAsyncThunk(
    'contacts/del',
    async (id) => {
       try {
        const {data} = await axios.delete(`/${id}`)
        return data.id;
       } catch (error) {
        Notiflix.Notify.failure(`Server responed with error: ${error}`);
       }
    }
)


