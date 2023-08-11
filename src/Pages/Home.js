import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bgcolor">
      <container className="vh-100 w-100 d-flex justify-content-center align-items-center">
        <Button
          variant="light fw-bold"
          style={{ marginRight: "10px" }}
          onClick={() => navigate("/createblog")}
        >
          Create Blog
        </Button>
        <Button variant="light fw-bold" onClick={() => navigate("/blogs")}>
          Read Blog
        </Button>
      </container>
    </div>
  );
};

export default Home;
