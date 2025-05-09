import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../../data/posts';
import './BlogList.css';

const BlogList = ({ limit }) => {
  // Use all posts or limit them based on the prop
  const displayPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="blog-list">
      <h1>{limit ? 'Latest Posts' : 'All Blog Posts'}</h1>
      <div className="posts-grid">
        {displayPosts.map((post) => (
          <article key={post.id} className="post-card">
            <div className="post-image">
              <img 
                src={post.image} 
                alt={post.title} 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x200?text=Blog+Image';
                }}
              />
            </div>
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <Link to={`/blogs/${post.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
