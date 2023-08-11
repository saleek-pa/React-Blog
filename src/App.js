import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBlog from "./Pages/CreateBlog";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";
import { BlogContext } from "./Context/Context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [blog, setBlog] = useState([
    {
      title: " The Art of Finding Happiness in Small Moments",
      content:
        "In the hustle and bustle of our daily lives, it's easy to overlook the beauty in the small moments that surround us. From the warmth of your morning coffee to the gentle rustling of leaves outside your window, these fleeting instances can hold immense joy if we pause to appreciate them.",
    },
    {
      title:
        "The Evolution of Learning: Lifelong Curiosity in an Ever-Changing World",
      content:
        "Change is a constant force that shapes our lives, yet it's often met with resistance and apprehension. However, beneath the uncertainty and discomfort, there lies an opportunity for profound self-discovery and growth.",
    },
    {
      title:
        "The Power of Connection: Nurturing Relationships in a Digital Age",
      content:
        "In an era dominated by screens and virtual interactions, the value of genuine human connection is more important than ever. Amid the digital noise, cultivating and nurturing meaningful relationships has become an art that requires intention and authenticity.",
    },
  ]);

  return (
    <div>
      <BlogContext.Provider value={{ blog, setBlog }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </BlogContext.Provider>
    </div>
  );
}

export default App;
