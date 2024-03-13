import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { PropTypes } from "prop-types";

const Blogs = ({ handleAddToBookMarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-3xl text-[#111] not-italic leading-9	font-bold mb-4">
        Books: {blogs.length}
      </h1>
      {blogs.map((bolg) => (
        <Blog
          key={blogs.id}
          blog={bolg}
          handleAddToBookMarks={handleAddToBookMarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookMarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blogs;
