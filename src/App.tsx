import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";
import Post from "./pages/Post";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/callback" element={<Redirect />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
