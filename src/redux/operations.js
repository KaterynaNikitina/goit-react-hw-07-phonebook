import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, deleteContacts, addContacts } from 'services/contacts-api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContactsThunk',
  async (_, thunkApi) => {
    try {
      const contactsData = await fetchContacts();
      return contactsData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
    'contacts/deleteContactsThunk',
    async (id, thunkApi) => {
      try {
        const response = await deleteContacts(id);
        return response;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );
  
  export const addContactsThunk = createAsyncThunk(
    'contacts/addContactsThunk',
    async ({ name, phone }, thunkApi) => {
      try {
        const response = await addContacts({ name, phone });
        return response;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );