import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Get all blogs
export const getBlogs = async () => {
  const response = await axios.get(`${API_URL}/blogs`);
  return response.data;
};

// Get a single blog
export const getBlogById = async (id) => {
  const response = await axios.get(`${API_URL}/blogs/${id}`);
  return response.data;
};

// Create a new blog (requires auth token)
export const createBlog = async (blogData) => {
  const response = await axios.post(`${API_URL}/blogs`, blogData);
  return response.data;
};

// Update a blog (requires auth token)
export const updateBlog = async (id, blogData) => {
  const response = await axios.put(`${API_URL}/blogs/${id}`, blogData);
  return response.data;
};

// Delete a blog (requires auth token)
export const deleteBlog = async (id) => {
  const response = await axios.delete(`${API_URL}/blogs/${id}`);
  return response.data;
}; 