import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import { BlogContext } from "../Context/Context";
import "./style.css";

const CreateBlog = () => {
  const navigate = useNavigate();
  const { blog, setBlog } = useContext(BlogContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogname = e.target.blogname.value;
    const blogcontent = e.target.blogcontent.value;
    setBlog([...blog, { title: blogname, content: blogcontent }]);
    navigate("/blogs");
  };
  console.log(blog);
  return (
    <div className="bgcolor">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Container className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-light mb-3">CREATE BLOG</h2>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Title"
            className="mb-3"
            style={{ width: "700px" }}
          >
            <Form.Control as="textarea" name="blogname" placeholder="Title" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Content">
            <Form.Control
              as="textarea"
              name="blogcontent"
              placeholder="Content"
              style={{ height: "150px", width: "700px" }}
            />
          </FloatingLabel>
          <button
            type="submit"
            className="custom-btn mt-3 fw-bolder text-dark"
          >
            Submit
          </button>
        </Container>
      </form>
    </div>
  );
};

export default CreateBlog;
