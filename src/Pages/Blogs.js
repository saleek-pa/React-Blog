import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../Context/Context";
import "./style.css";
import "../App.css"

const Blogs = () => {
  const navigate = useNavigate();
  const { blog } = useContext(BlogContext);
  console.log(blog);

  return (
    <div className="vh-100 bgcolor text-light">
      <h2 className="pt-5 pb-3 App">Blogs</h2>
      <div className="map-blog">
        {blog.map((value, index) => (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Body>
              <Card.Title>{value.title}</Card.Title>
              <Button
                variant="primary"
                onClick={() => navigate(`/blog/${index}`)}
              >
                Read Post
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
