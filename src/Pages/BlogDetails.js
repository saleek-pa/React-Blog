import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../Context/Context";
import "./style.css";
import "../App.css"

const BlogDetails = () => {
  const { id } = useParams();
  const { blog } = useContext(BlogContext);
  console.log(id);
  return (
    <div className="bgcolor vh-100 p-5 App text-light d-flex flex-column justify-content-center">
      <h1>{blog[id].title}</h1>
      <p>{blog[id].content}</p>
    </div>
  );
};

export default BlogDetails;
