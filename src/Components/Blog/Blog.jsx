import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookMarks, handleMarkAsRead }) => {
  const {
    title,
    cover_image,
    author_image,
    author,
    posted_date,
    post_time,
    hashtags,
    time,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full rounded-xl"
        src={cover_image}
        alt={`Cover Picture of the title ${title}`}
      />
      <div className="flex justify-between items-center mt-8 mb-4">
        <div className="flex items-center">
          <img className="w-16 mr-6" src={author_image} alt="" />
          <div>
            <h2 className="leading-9">{author}</h2>
            <p className="leading-6	">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-[#11111199]">{time}</p>
          <p className="text-[#11111199]">{post_time}</p>
          <button
            onClick={() => handleAddToBookMarks(blog)}
            className="text-[#11111199] text-xl"
          >
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-5xl text-[#111] font-bold not-italic	leading-[64px] mb-4">
        Title: {title}
      </h1>
      <p className="text-[#11111199] text-lg leading-8	font-medium not-italic mb-4">
        {hashtags.map((hash, hex) => (
          <span key={hex}>
            <a>{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(time)}
        className="text-[#6037EC] text-xl font-semibold not-italic	underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
