import { useDispatch, useSelector } from 'react-redux';
import { HiMenu } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
import { setListState } from '../redux/listAsideSlice';

const Header = () => {
  const isAnimated = useSelector((state) => state.listBtn.isAnimated);
  const isOpened = useSelector((state) => state.listAside.isOpened);
  const dispatch = useDispatch();

  const handleMenuState = () => {
    console.log('💬:header.js:handleMenuState:12:', 'isOpened: ', isOpened);
    dispatch(setListState());
    console.log('💬:header.js:handleMenuState:14:', 'isOpened: ', isOpened);
  };

  return (
    <header>
      <span>
        <b>Literary</b>
        Lounge
      </span>
      <nav>
        <button
          type="button"
          className={`btn list-btn ${isAnimated ? 'list-btn-animation ' : ''} `}
          onClick={() => handleMenuState()}
        >
          {isOpened ? <GrFormClose /> : <HiMenu />}
          Reading List
        </button>
      </nav>
    </header>
  );
};

export default Header;
