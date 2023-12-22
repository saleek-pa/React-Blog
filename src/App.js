import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBlog from "./Pages/BlogCreate";
import BlogDetails from "./Pages/BlogDetails";
import "./Styles/style.css"

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/create-blog" element={<CreateBlog />} />
         </Routes>
      </div>
   );
}

export default App;
