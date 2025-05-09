import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About BlogApp</h1>
        <p className="about-subtitle">A platform for sharing meaningful stories and ideas</p>
      </section>

      <section className="about-section">
        <h2>Welcome to Our Community</h2>
        <p>
          BlogApp is a space where writers, thinkers, and storytellers come together
          to share their perspectives and expertise. We believe in the power of
          well-crafted content to inspire, educate, and connect people.
        </p>
      </section>

      <section className="about-features">
        <h2>What Makes Us Different</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Quality Content</h3>
            <p>Every post is curated to ensure high-quality, engaging content that adds value to our readers.</p>
          </div>
          <div className="feature-card">
            <h3>Easy Writing</h3>
            <p>Our intuitive editor makes it simple to create beautiful, well-formatted blog posts.</p>
          </div>
          <div className="feature-card">
            <h3>Active Community</h3>
            <p>Connect with like-minded individuals and grow your audience organically.</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Start Your Writing Journey</h2>
        <p>Join our community of writers and start sharing your stories today.</p>
        <Link to="/blogs" className="cta-button">Explore Blogs</Link>
      </section>
    </div>
  );
};

export default About;
