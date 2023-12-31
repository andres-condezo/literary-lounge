import { PropTypes } from 'prop-types';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { BiBookBookmark } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';
import { TbSlash } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { loadState } from '../logic/localStorage';

const BookListHeader = ({ filteredBookList }) => {
  const genre = [...new Set(filteredBookList.map((book) => book.genre))];
  const filteredGenre = genre.length > 1 ? null : genre;
  const bookList = useSelector((state) => state.books);
  const readingList = loadState();

  return (
    <div className="section-header">
      <div className="title">
        <h1>Books</h1>
        <span>
          {filteredGenre && <TbSlash />}
          {filteredGenre && filteredGenre}
        </span>
      </div>
      <div className="counters">
        <p>Count Check: </p>
        <div className="tip">
          <FiFilter />
          <span>Filtered books</span>
          {filteredBookList.length}
        </div>
        <div className="tip">
          <BiBookBookmark />
          <span>Available books</span>
          {bookList.length}
        </div>
        <div className="tip">
          <MdOutlineBookmarkAdd />
          <span>Reading queue</span>
          {readingList.length}
        </div>
      </div>
    </div>
  );
};

BookListHeader.propTypes = {
  filteredBookList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default BookListHeader;
