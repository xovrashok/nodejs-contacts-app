import { ContactCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await ContactCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactCollection.create(payload);
  return contact;
};

export const upsertContact = async (contactId, payload) => {
  const contact = await ContactCollection.findByIdAndUpdate(
    contactId,
    payload,
    { new: true },
  );

  return contact;
};
