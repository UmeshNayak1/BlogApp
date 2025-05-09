import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById, apiStates } from '../services/api';
import Loading from '../components/Loading/Loading';
import { ensureImage, getLocalPlaceholder, getAvatarUrl } from '../utils/imageUtils';
import './BlogPost.css';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const [status, setStatus] = useState(apiStates.LOADING);
  const [error, setError] = useState(null);
  const [postImage, setPostImage] = useState(null);
  
  // Helper function to safely get author slug
  const getAuthorSlug = (authorName) => {
    if (!authorName) return 'unknown-author';
    return authorName.toLowerCase().replace(/\s+/g, '-');
  };
  
  useEffect(() => {
    async function getPost() {
      try {
        const response = await fetchPostById(id);
        setStatus(response.status);
        if (response.status === apiStates.SUCCESS) {
          setPost(response.data);
          setPostImage(ensureImage(response.data.coverImage));
        } else {
          setError(response.error);
        }
      } catch (err) {
        setStatus(apiStates.ERROR);
        setError(err.message);
      }
    }

    getPost();
  }, [id]);

  const handleImageError = () => {
    setPostImage(getLocalPlaceholder());
  };

  return (
    <div className="blog-post">
      {status === apiStates.LOADING ? (
        <Loading center size="large" />
      ) : status === apiStates.ERROR ? (
        <div className="error-message">Error: {error}</div>
      ) : (
        post && (
          <article>
            <h1 className="post-title">{post.title}</h1>
            
            <div className="post-meta">
              <span className="post-author">
                By {post.author ? (
                  <Link to={`/author/${getAuthorSlug(post.author)}`}>
                    {post.author}
                  </Link>
                ) : (
                  <span>Unknown Author</span>
                )}
              </span>
              <span className="post-date">Published on {new Date(post.date).toLocaleDateString()}</span>
              {post.category && <span className="post-category">{post.category}</span>}
            </div>
            
            <div className="post-content">
              <p className="post-excerpt">{post.excerpt}</p>
              {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
            </div>
            
            <div className="post-author-box">
              <h3>About the Author</h3>
              <div className="author-info">
                <div className="author-avatar">
                  <img 
                    src={getAvatarUrl(post.author)} 
                    alt={post.author || 'Unknown Author'} 
                  />
                </div>
                <div className="author-bio">
                  <h4>{post.author || 'Unknown Author'}</h4>
                  <p>
                    {post.author 
                      ? `This author writes about ${post.category || 'various topics'} and has published several articles on our blog.`
                      : 'This post was published without author information.'}
                  </p>
                  <Link to={`/author/${getAuthorSlug(post.author)}`} className="author-link">
                    {post.author 
                      ? `View all posts by ${post.author}`
                      : 'View posts by unknown authors'}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )
      )}
    </div>
  );
}

export default BlogPost;
