import React, { useContext, useState } from "react";
import { BlogContext } from "../App";
import Navbar from "../Components/Navbar";

const BlogCreate = () => {
   const { dateConvert } = useContext(BlogContext);
   const [content, setContent] = useState({
      id: Date.now(),
      title: "",
      description: "",
      author: "",
      content: "",
      created_at: new Date(),
      photo_url:
         "https://www.realsimple.com/thmb/RoewhWQEjNDAohqlbZkzGaQTs0o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pantone-color-of-the-year-2023-ab984d87577a46e3a300649442aa36c2.jpeg",
   });

   console.log(content)

   const handleInputChange = (field, value) => {
      setContent((prevDetails) => ({
         ...prevDetails,
         [field]: value,
      }));
   };

   const handleContentEditableChange = (field, event) => {
      handleInputChange(field, event.target.innerText);
   };

   return (
      <>
         <Navbar />

         <section className="blog-details">
            <div style={{ display: "flex", alignItems: "flex-end", gap: "20px", marginBottom: "30px" }}>
               <img
                  src="https://www.realsimple.com/thmb/RoewhWQEjNDAohqlbZkzGaQTs0o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pantone-color-of-the-year-2023-ab984d87577a46e3a300649442aa36c2.jpeg"
                  alt=""
                  className="details-image"
               />
               <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                  <p
                     contentEditable
                     className="details-title"
                     data-placeholder="Title"
                     style={{ border: "none", fontSize: "40px" }}
                     onInput={(e) => handleContentEditableChange("title", e)}
                  ></p>
                  <p
                     contentEditable
                     className="details-description"
                     data-placeholder="Description"
                     style={{ fontSize: "19px" }}
                     onInput={(e) => handleContentEditableChange("description", e)}
                  ></p>
                  <p
                     contentEditable
                     data-placeholder="Author"
                     style={{ fontSize: "17px" }}
                     onInput={(e) => handleContentEditableChange("author", e)}
                  ></p>
                  <p className="details-author">{dateConvert(new Date())}</p>
               </div>
            </div>
            <p
               contentEditable
               data-placeholder="Content..."
               className="details-content"
               onInput={(e) => handleContentEditableChange("content", e)}
            ></p>
         </section>
         <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="publish-button">Publish</button>
         </div>
      </>
   );
};

export default BlogCreate;
