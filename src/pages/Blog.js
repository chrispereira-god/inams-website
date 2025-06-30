import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag } from 'lucide-react';
import { getBlogs } from '../services/blogService';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    'AI in Medicine',
    'Professional Development',
    'Medical Research',
    'Healthcare Innovation',
    'Medical Education'
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await getBlogs();
      setBlogs(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch blog posts. Please try again later.');
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => blog.category === selectedCategory)
    : blogs;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">INAMS Blog</h1>
          <p className="text-xl text-gray-700">
            Insights and updates from the world of medical education and AI integration
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-8 text-center">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {filteredBlogs.map((post) => (
            <div key={post._id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src={post.image || 'https://source.unsplash.com/random/800x600/?medical,technology'}
                alt={post.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = 'https://source.unsplash.com/random/800x600/?medical,technology';
                }}
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  {post.status === 'published' && (
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      Published
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-700 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    {post.readTime && (
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                    )}
                  </div>
                  <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link
                  to={`/blog/${post._id}`}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {blogs.length === 0 && !loading && !error && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Coming Soon!

Our blog section is currently under construction.
Stay tuned for powerful stories, expert insights, and the latest updates at the intersection of AI and Medical Sciences.

We’re launching soon — and it’ll be worth the wait!
</p>
          </div>
        )}

        <div className="mt-16">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Categories</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 