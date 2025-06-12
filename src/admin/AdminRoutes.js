import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import AdminEventDetail from './pages/AdminEventDetail';
import NewEventForm from './pages/NewEventForm';
import EventsPage from './pages/EventsPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/new" element={<NewEventForm />} />
      <Route path="/events/:id" element={<AdminEventDetail />} />
    </Routes>
  );
};

export default AdminRoutes; 