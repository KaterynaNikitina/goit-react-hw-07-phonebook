import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk, deleteContactsThunk, addContactsThunk } from './operations';

const contactIinitialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactIinitialState,

  extraReducers: builder =>
    builder
      // Oтримує всі контакти з БД:
      .addCase(fetchContactsThunk.pending, (state, action) => {
        state.error = null;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.error = action.payload;
      }) 
      // Видаляє контакт з БД:
      .addCase(deleteContactsThunk.pending, (state, action) => {
        state.error = null;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        const contactIndex = state.contacts.findIndex(
          contact => contact.id === action.payload
        );
        state.contacts.splice(contactIndex, 1);
      })
      .addCase(deleteContactsThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Додає контакт у БД
      .addCase(addContactsThunk.pending, (state, action) => {
        state.error = null;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContactsThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
});

export const { addContact, deleteContacts, fetchContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
