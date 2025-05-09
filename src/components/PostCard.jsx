import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p className="post-date">Published on: {post.date}</p>
      <p className="post-excerpt">{post.excerpt}</p>
      <Link to={`/blogs/${post.id}`} className="read-more">Read More</Link>
    </div>
  );
}

export default PostCard;
