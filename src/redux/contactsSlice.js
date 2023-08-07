import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  deleteContactsThunk,
  addContactsThunk,
} from './operations';

const contactIinitialState = {
  contacts: [],
};

const handlePending = state => {
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactIinitialState,

  extraReducers: builder =>
    builder
      // Oтримує всі контакти з БД:
      .addCase(fetchContactsThunk.pending, handlePending)
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, handleRejected)
      // Видаляє контакт з БД:
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        const contactIndex = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(contactIndex, 1);
      })
      .addCase(deleteContactsThunk.rejected, handleRejected)
      // Додає контакт у БД
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContactsThunk.rejected, handleRejected),
});


export const contactsReducer = contactsSlice.reducer;
