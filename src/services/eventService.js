import axios from 'axios';

const API_URL = 'https://inams-website.onrender.com/api';

// Get all events
export const getEvents = async () => {
  const response = await axios.get(`${API_URL}/events`);
  return response.data;
};

// Get a single event
export const getEventById = async (id) => {
  const response = await axios.get(`${API_URL}/events/${id}`);
  return response.data;
};

// Create a new event (requires auth token)
export const createEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}/events`, eventData);
  return response.data;
};

// Update an event (requires auth token)
export const updateEvent = async (id, eventData) => {
  const response = await axios.put(`${API_URL}/events/${id}`, eventData);
  return response.data;
};

// Delete an event (requires auth token)
export const deleteEvent = async (id) => {
  const response = await axios.delete(`${API_URL}/events/${id}`);
  return response.data;
}; 