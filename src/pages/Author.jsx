import React from 'react';
import { useParams } from 'react-router-dom';
import { getAvatarUrl } from '../utils/imageUtils';
import './Author.css';

function Author() {
  const { authorSlug } = useParams();
  
  // Handle the case when slug is 'unknown-author'
  const isUnknown = authorSlug === 'unknown-author';
  
  // Safe way to format the author name from slug
  const formatAuthorName = (slug) => {
    if (isUnknown) return 'Unknown Author';
    
    try {
      return slug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    } catch (e) {
      return 'Author';
    }
  };
  
  const authorName = formatAuthorName(authorSlug);

  return (
    <div className="author-page">
      <div className="author-header">
        <div className="author-avatar">
          <img src={getAvatarUrl(authorName)} alt={authorName} />
        </div>
        <div className="author-info">
          <h1>{authorName}</h1>
          <p className="author-bio">
            {isUnknown 
              ? 'This post was published without author information.'
              : `This is the author page for ${authorName}. More information about this author will be available soon.`
            }
          </p>
        </div>
      </div>

      <div className="author-content">
        <h2>Articles by {authorName}</h2>
        <p>We're currently collecting articles by this author. Check back soon!</p>
      </div>
    </div>
  );
}

export default Author;
