import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
   const [blogs, setBlogs] = useState([]);
   const [authors, setAuthors] = useState({});
   const navigate = useNavigate();

   useEffect(() => {
      const fetchBlogPost = () => {
         fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?limit=30")
            .then((response) => response.json())
            .then((data) => setBlogs(data.blogs));
      };
      fetchBlogPost();
   }, []);

   useEffect(() => {
      const fetchAuthor = (authorId) => {
         fetch(`https://api.slingacademy.com/v1/sample-data/users/${authorId}`)
            .then((response) => response.json())
            .then((data) => setAuthors((prevAuthors) => ({ ...prevAuthors, [authorId]: data.user })));
      };

      blogs.forEach((blog) => {
         fetchAuthor(blog.user_id);
      });
   }, [blogs]);

   console.log(authors);

   const dateConvert = (timestamp) => {
      if (!timestamp) return "Invalid Date";
      const date = new Date(timestamp);
      return date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
   };

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
                        {authors[blog.user_id]
                           ? `${authors[blog.user_id].first_name} ${authors[blog.user_id].last_name}`
                           : "Unknown Author"}{" "}
                        &#8226; {dateConvert(blog.created_at)}
                     </p>
                  </div>
               ))}
            </section>
         </article>
      </>
   );
};

export default Home;
