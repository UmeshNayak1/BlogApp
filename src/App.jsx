import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogList from './components/BlogList/BlogList';
import BlogPost from './pages/BlogPost';
import Author from './pages/Author';
import NotFound from './pages/NotFound';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/author/:authorSlug" element={<Author />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
