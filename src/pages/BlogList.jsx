import { useState, useEffect } from 'react';
import { fetchAllPosts } from '../services/api';
import PostCard from '../components/PostCard';
import Loading from '../components/Loading';

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await fetchAllPosts();
        setPosts(allPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="blog-list-page">
      <h1>All Blog Posts</h1>
      
      <div className="posts-grid">
        {posts.length > 0 ? (
          posts.map(post => <PostCard key={post.id} post={post} />)
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}

export default BlogList;
