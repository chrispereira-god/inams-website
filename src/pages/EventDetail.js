import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, DollarSign } from 'lucide-react';
import { getEventById } from '../services/eventService';
import axios from 'axios';
import { format } from 'date-fns';
import EventRegistrationForm from '../components/EventRegistrationForm';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    specialRequirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    try {
      setLoading(true);
      const data = await getEventById(id);
      setEvent(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch event details. Please try again later.');
      console.error('Error fetching event:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real app, make an API call to submit the registration
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegistrationSuccess = (data) => {
    setRegistrationSuccess(true);
    // Refresh event data to get updated registration count
    fetchEvent();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="text-xl text-gray-600">Loading event details...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-red-50 text-red-600 p-4 rounded-xl">
          {error}
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center text-gray-600">
          Event not found.
        </div>
      </div>
    );
  }

  const isEventFull = event.registeredAttendees.length >= event.capacity;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      <Link
        to="/events"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
        Back to Events
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Event Details */}
        <div className="lg:col-span-2">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[400px] object-cover rounded-2xl mb-8"
          />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{event.title}</h1>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              <div>
                <div className="font-semibold">{formatDate(event.startDate)}</div>
                <div>{formatTime(event.startDate)} - {formatTime(event.endDate)}</div>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              <span>{event.location}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              <span>{event.registeredAttendees?.length || 0}/{event.capacity} Registered</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
              <span>${event.price}</span>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
            <div className="text-gray-600 whitespace-pre-wrap">{event.description}</div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
            {registrationSuccess ? (
              <div className="text-center">
                <div className="text-green-600 text-xl font-semibold mb-2">Registration Successful!</div>
                <p className="text-gray-600 mb-4">Thank you for registering. We'll send you a confirmation email shortly.</p>
                <button
                  onClick={() => setRegistrationSuccess(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Register another person
                </button>
              </div>
            ) : isEventFull ? (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
                This event is currently at full capacity.
              </div>
            ) : (
              <EventRegistrationForm
                eventId={id}
                onRegistrationSuccess={handleRegistrationSuccess}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail; 