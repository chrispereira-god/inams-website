import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Submit a new contact message (public)
export const submitContact = async (contactData) => {
  const response = await axios.post(`${API_URL}/contacts`, contactData);
  return response.data;
};

// Get all contacts (admin only)
export const getContacts = async () => {
  const response = await axios.get(`${API_URL}/contacts`);
  return response.data;
};

// Get a single contact by ID (admin only)
export const getContactById = async (id) => {
  const response = await axios.get(`${API_URL}/contacts/${id}`);
  return response.data;
};

// Update contact status and add notes (admin only)
export const updateContact = async (id, updateData) => {
  const response = await axios.patch(`${API_URL}/contacts/${id}`, updateData);
  return response.data;
};

// Delete a contact (admin only)
export const deleteContact = async (id) => {
  const response = await axios.delete(`${API_URL}/contacts/${id}`);
  return response.data;
}; 