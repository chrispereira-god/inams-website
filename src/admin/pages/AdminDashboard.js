import React, { useState, useEffect } from 'react';
import { FileText, Calendar, Users, MessageSquare } from 'lucide-react';
import { getEvents } from '../../services/eventService';
import { getBlogs } from '../../services/blogService';
import { getContacts } from '../../services/contactService';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    blogs: 0,
    events: 0,
    registrations: 0,
    contacts: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      
      // Fetch all data in parallel
      const [events, blogs, contacts] = await Promise.all([
        getEvents(),
        getBlogs(),
        getContacts()
      ]);

      // Calculate total registrations
      const totalRegistrations = events.reduce((total, event) => 
        total + (event.registeredAttendees?.length || 0), 0);

      setStats({
        blogs: blogs.length,
        events: events.length,
        registrations: totalRegistrations,
        contacts: contacts.length
      });

      setError('');
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
      setError('Failed to fetch dashboard statistics');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {error && (
        <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Blogs"
          value={stats.blogs}
          icon={FileText}
          color="bg-blue-500"
        />
        <StatCard
          title="Total Events"
          value={stats.events}
          icon={Calendar}
          color="bg-green-500"
        />
        <StatCard
          title="Total Registrations"
          value={stats.registrations}
          icon={Users}
          color="bg-purple-500"
        />
        <StatCard
          title="Total Contacts"
          value={stats.contacts}
          icon={MessageSquare}
          color="bg-orange-500"
        />
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Quick Overview</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Latest Activity</p>
            <ul className="space-y-2">
              <li className="text-sm">• {stats.blogs} blog posts published</li>
              <li className="text-sm">• {stats.events} events organized</li>
              <li className="text-sm">• {stats.registrations} total event registrations</li>
              <li className="text-sm">• {stats.contacts} contact messages received</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">System Status</p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                All systems operational
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                Database connected
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                API services running
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 