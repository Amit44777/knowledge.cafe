import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const {
    title,
    cover_image,
    author_image,
    author,
    posted_date,
    post_time,
    hashtags,
  } = blog;
  return (
    <div>
      <img
        className="w-[845px]"
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
        <div>
          <p className="text-[#11111199]">{post_time}</p>
        </div>
      </div>
      <h1 className="text-5xl text-[#111] font-bold not-italic	leading-[64px] mb-4">
        Title: {title}
      </h1>
      <p className="text-[#11111199] text-lg leading-8	font-medium not-italic">
        {hashtags.map((hash, hex) => (
          <span key={hex}>
            <a>{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
