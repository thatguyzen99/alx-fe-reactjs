import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  const isAuthenticated = true; // Simulate authentication check

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />} />
        <Route path="/post/:postId" element={<BlogPost />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Added dynamic blog route */}
      </Routes>
    </Router>
  );
}

export default App;
