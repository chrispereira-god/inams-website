import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { getBlogById } from '../services/blogService';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const data = await getBlogById(id);
      setBlog(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching blog:', err);
      setError('Failed to load the blog post. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog?.title || 'INAMS Blog Post';
    
    let shareUrl;
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </Link>
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center">
          {error}
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </Link>
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Blog post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back Button */}
      <Link
        to="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
        Back to Blogs
      </Link>

      {/* Blog Header */}
      <div className="mb-8">
        <img
          src={blog.image || 'https://source.unsplash.com/random/1600x900/?medical,technology'}
          alt={blog.title}
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
          onError={(e) => {
            e.target.src = 'https://source.unsplash.com/random/1600x900/?medical,technology';
          }}
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {blog.title}
        </h1>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-6">
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            {blog.author}
          </div>
          {blog.readTime && (
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {blog.readTime}
            </div>
          )}
          <div className="flex items-center">
            <Tag className="w-5 h-5 mr-2" />
            {blog.category}
          </div>
          <div className="text-gray-500">
            {formatDate(blog.publishedAt || blog.createdAt)}
          </div>
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Blog Content */}
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Share and Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
          <div className="flex space-x-4">
            <button 
              onClick={() => handleShare('twitter')}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={() => handleShare('linkedin')}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={() => handleShare('facebook')}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail; 