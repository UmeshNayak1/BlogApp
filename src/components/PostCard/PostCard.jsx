import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';
import { ensureImage, getLocalPlaceholder } from '../../utils/imageUtils';

const PostCard = ({ post }) => {
  const { id, title, excerpt, date, author, coverImage, category } = post;
  const [imgSrc, setImgSrc] = useState(ensureImage(coverImage));
  
  // Format the date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const handleImageError = () => {
    // If the image fails to load, use our local SVG placeholder
    setImgSrc(getLocalPlaceholder());
  };
  
  // Helper function to safely get author slug
  const getAuthorSlug = (authorName) => {
    if (!authorName) return 'unknown-author';
    return authorName.toLowerCase().replace(/\s+/g, '-');
  };
  
  return (
    <div className="post-card">
      <div className="post-card__image-container">
        <img 
          src={imgSrc}
          alt={title} 
          className="post-card__image" 
          onError={handleImageError}
        />
        {category && <span className="post-card__category">{category}</span>}
      </div>
      
      <div className="post-card__content">
        <h2 className="post-card__title">
          <Link to={`/blogs/${id}`}>{title}</Link>
        </h2>
        
        <div className="post-card__meta">
          <span className="post-card__author">
            By {author ? (
              <Link to={`/author/${getAuthorSlug(author)}`} className="post-card__author-link">
                {author}
              </Link>
            ) : (
              <span>Unknown Author</span>
            )}
          </span>
          <span className="post-card__date">{formattedDate}</span>
        </div>
        
        <p className="post-card__excerpt">{excerpt}</p>
        
        <div className="post-card__actions">
          <Link to={`/blogs/${id}`} className="post-card__read-more">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
