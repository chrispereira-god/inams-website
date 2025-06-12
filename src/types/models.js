import PropTypes from 'prop-types';

/**
 * @typedef {Object} Event
 * @property {string} [_id] - MongoDB document ID
 * @property {string} title - Event title
 * @property {string} description - Event description
 * @property {Date} startDate - Event start date
 * @property {Date} endDate - Event end date
 * @property {string} location - Event location
 * @property {('webinar'|'conference'|'workshop'|'other')} type - Event type
 * @property {number} capacity - Event capacity
 * @property {Array<{name: string, email: string, registrationDate: Date}>} [registeredAttendees] - List of registered attendees
 * @property {string} [image] - Event image URL
 * @property {('upcoming'|'ongoing'|'completed'|'cancelled')} status - Event status
 * @property {number} price - Event price
 * @property {Array<{name: string, bio: string, image: string}>} [speakers] - Event speakers
 * @property {Date} [createdAt] - Creation timestamp
 * @property {Date} [updatedAt] - Last update timestamp
 */

/**
 * @typedef {Object} Blog
 * @property {string} [_id] - MongoDB document ID
 * @property {string} title - Blog title
 * @property {string} content - Blog content
 * @property {string} excerpt - Blog excerpt
 * @property {string} author - Blog author
 * @property {string} category - Blog category
 * @property {string[]} tags - Blog tags
 * @property {string} image - Blog image URL
 * @property {('draft'|'published')} status - Blog status
 * @property {Date} [publishedAt] - Publication date
 * @property {Date} [createdAt] - Creation timestamp
 * @property {Date} [updatedAt] - Last update timestamp
 */

/**
 * @typedef {Object} Contact
 * @property {string} [_id] - MongoDB document ID
 * @property {string} name - Contact name
 * @property {string} email - Contact email
 * @property {string} [phone] - Contact phone
 * @property {string} subject - Contact subject
 * @property {string} message - Contact message
 * @property {('new'|'in-progress'|'resolved')} status - Contact status
 * @property {Array<{content: string, createdAt: Date}>} [notes] - Contact notes
 * @property {Date} [createdAt] - Creation timestamp
 * @property {Date} [updatedAt] - Last update timestamp
 */

// PropTypes for React components
export const EventPropTypes = {
  _id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['webinar', 'conference', 'workshop', 'other']).isRequired,
  capacity: PropTypes.number.isRequired,
  registeredAttendees: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      registrationDate: PropTypes.instanceOf(Date).isRequired
    })
  ),
  image: PropTypes.string,
  status: PropTypes.oneOf(['upcoming', 'ongoing', 'completed', 'cancelled']).isRequired,
  price: PropTypes.number.isRequired,
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ),
  createdAt: PropTypes.instanceOf(Date),
  updatedAt: PropTypes.instanceOf(Date)
};

export const BlogPropTypes = {
  _id: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['draft', 'published']).isRequired,
  publishedAt: PropTypes.instanceOf(Date),
  createdAt: PropTypes.instanceOf(Date),
  updatedAt: PropTypes.instanceOf(Date)
};

export const ContactPropTypes = {
  _id: PropTypes.string,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['new', 'in-progress', 'resolved']).isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired
    })
  ),
  createdAt: PropTypes.instanceOf(Date),
  updatedAt: PropTypes.instanceOf(Date)
}; 