import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const BlogDetails = () => {
   const { id } = useParams();
   const [details, setDetails] = useState();

   useEffect(() => {
      const fetchBlogPostDetails = () => {
         fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
            .then((response) => response.json())
            .then((data) => setDetails(data.blog));
      };
      fetchBlogPostDetails();
   }, [id]);

   const dateConvert = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
   };

   console.log(details);
   return (
      <>
         <Navbar />
         {details && (
            <section className="blog-details">
               <div style={{ display: "flex", alignItems: "flex-end", gap: "20px", marginBottom: "30px" }}>
                  <img src={details.photo_url} alt={details.title} className="details-image" />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                     <h3 className="details-title">{details.title}</h3>
                     <h3 className="details-description">{details.description}</h3>
                     <p className="details-author">Lana Steiner &#8226; {dateConvert(details.created_at)}</p>
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
