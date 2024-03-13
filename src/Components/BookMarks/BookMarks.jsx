import Bookmark from "../Bookmark/Bookmark";
import { PropTypes } from "prop-types";
const BookMarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 rounded-lg ml-6 mt-2 pt-4">
      <div>
        <h2 className="text-2xl text-[#6037EC]  not-italic leading-9	font-semibold mb-4 text-center">
          Reading Time: {readingTime}
        </h2>
      </div>
      <h2 className="text-3xl text-[#111] not-italic leading-9	font-bold mb-4 text-center">
        Bookmarked Blogs : {bookMarks.length}
      </h2>
      {bookMarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

BookMarks.propTypes = {
  bookMarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default BookMarks;
