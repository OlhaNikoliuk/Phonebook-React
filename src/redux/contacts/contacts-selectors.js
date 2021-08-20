import {createSelector} from '@reduxjs/toolkit';
export const getContactList = (state) => state.contacts.items;
export const getFilterValue = (state) => state.contacts.filter;
export const isLoadingValue = (state) => state.contacts.isLoading;

export const getVisibleContacts = createSelector(
  [getContactList, getFilterValue],

  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts
      .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
);
