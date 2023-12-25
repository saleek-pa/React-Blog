import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBlog from "./Pages/BlogCreate";
import BlogDetails from "./Pages/BlogDetails";
import "./Styles/style.css";

export const BlogContext = createContext();

function App() {
   const [blog, setBlog] = useState([]);

   const dateConvert = (timestamp) => {
      if (!timestamp) return "Invalid Date";
      const date = new Date(timestamp);
      return date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
   };

   return (
      <div>
         <BlogContext.Provider value={{ blog, setBlog, dateConvert }}>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/blogs/:id" element={<BlogDetails />} />
               <Route path="/create-blog" element={<CreateBlog />} />
            </Routes>
         </BlogContext.Provider>
      </div>
   );
}

export default App;
