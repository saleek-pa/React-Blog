import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
   const [blogs, setBlogs] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      const fetchBlogPost = () => {
         fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?limit=30")
            .then((response) => response.json())
            .then((data) => setBlogs(data.blogs));
      };
      fetchBlogPost();
   }, []);

   const dateConvert = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
   };

   console.log(blogs);
   return (
      <>
         <Navbar />

         <article className="article-container">
            <h2 className="article-container-heading">Blog Posts</h2>
            <section className="blog-card-container">
               {blogs.map((blog) => (
                  <div className="blog-card" key={blog.id} onClick={() => navigate(`/blogs/${blog.id}`)}>
                     <img src={blog.photo_url} alt={blog.title} className="blog-image" />
                     <h3 className="blog-title">{blog.title}</h3>
                     <p className="blog-description">{blog.description}</p>
                     <p className="blog-author-date">
                        <span>O</span> Lana Steiner &#8226; {dateConvert(blog.created_at)}
                     </p>
                  </div>
               ))}
            </section>
         </article>
      </>
   );
};

export default Home;
