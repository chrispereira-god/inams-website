import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Pillars from './pages/Pillars';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import INAMSLandingPage from './pages/Home';
import Admin from './admin/Admin';
import Login from './admin/Login';
import { AuthProvider } from './contexts/AuthContext';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <AuthProvider>
      {isAdminRoute ? (
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      ) : (
        <AppLayout>
          <Routes>
            <Route path="/" element={<INAMSLandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/pillars" element={<Pillars />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AppLayout>
      )}
    </AuthProvider>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;