import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;
export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        const formattedFilter = filter.toLowerCase();
        return contacts.length > 0
        ? (contacts.filter(contact => contact.name.toLowerCase().includes(formattedFilter)))
        : [];
    }
)