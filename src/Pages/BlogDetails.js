import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../App";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const BlogDetails = () => {
   const { id } = useParams();
   const { dateConvert } = useContext(BlogContext);
   const [details, setDetails] = useState();
   const [author, setAuthor] = useState();

   useEffect(() => {
      const fetchBlogPostDetails = () => {
         fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
               setDetails(data.blog);
               fetchAuthor(data.blog.user_id);
            });
      };

      const fetchAuthor = (authorId) => {
         fetch(`https://api.slingacademy.com/v1/sample-data/users/${authorId}`)
            .then((response) => response.json())
            .then((data) => setAuthor(data.user));
      };

      fetchBlogPostDetails();
   }, [id]);

   return (
      <>
         <Navbar />
         {details && (
            <section className="blog-details">
               <div style={{ display: "flex", alignItems: "flex-end", gap: "20px", marginBottom: "30px" }}>
                  <img src={details.photo_url} alt={details.title} className="details-image" />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                     <h3 className="details-title">{details.title}</h3>
                     <p className="details-description">{details.description}</p>
                     <p className="details-author">
                        {author ? `${author.first_name} ${author.last_name}` : "Unknown Author"} &#8226;{" "}
                        {dateConvert(details.created_at)}
                     </p>
                  </div>
               </div>
               <div className="details-content">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{details.content_text}
               </div>
            </section>
         )}
      </>
   );
};

export default BlogDetails;
