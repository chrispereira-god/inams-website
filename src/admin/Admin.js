import React, { useState } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar,
  Mail,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AdminRoutes from './AdminRoutes';

const Admin = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  const menuItems = [
    { path: '/admin', icon: <LayoutDashboard size={20} />, title: 'Dashboard' },
    { path: '/admin/blogs', icon: <FileText size={20} />, title: 'Blogs' },
    { path: '/admin/events', icon: <Calendar size={20} />, title: 'Events' },
    { path: '/admin/contact', icon: <Mail size={20} />, title: 'Contact' }
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`bg-white h-full shadow-xl transition-all duration-300 ${
          isSidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {/* Logo Area */}
        <div className="flex items-center justify-between p-4 border-b">
          {!isSidebarCollapsed && (
            <span className="text-xl font-bold text-blue-600">INAMS Admin</span>
          )}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {isSidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 mb-1 transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="inline-block">{item.icon}</span>
              {!isSidebarCollapsed && (
                <span className="ml-3">{item.title}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className={`flex items-center text-gray-600 hover:text-red-600 transition-colors ${
              isSidebarCollapsed ? 'justify-center' : ''
            }`}
          >
            <LogOut size={20} />
            {!isSidebarCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {menuItems.find(item => item.path === location.pathname)?.title || 'Dashboard'}
            </h1>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          <AdminRoutes />
        </main>
      </div>
    </div>
  );
};

export default Admin; 