import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Books: {blogs.length}</h1>
      {blogs.map((bolg) => (
        <Blog key={blogs.id} blog={bolg}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
