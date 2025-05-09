import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from '../components/BlogList/BlogList';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to BlogApp</h1>
        <p>Discover the latest in web development</p>
      </section>
      
      <section className="latest-posts">
        <div className="section-header">
          <Link to="/blogs" className="view-all">View All Posts →</Link>
        </div>
        
        <BlogList limit={3} />
      </section>
    </div>
  );
}

export default Home;
