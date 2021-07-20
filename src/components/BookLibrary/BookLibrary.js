import { useSelector } from 'react-redux';
import BookContainer from '../BookContainer/BookContainer';
import SearchBox from '../Header/SearchBox';

function BookLibrary(){
    const books = useSelector((state) => state.books.books);

    return (
        <div className="container-fluid my-4">
            <SearchBox />
            <BookContainer booklist={books} />
        </div>
    )
}

export default BookLibrary;