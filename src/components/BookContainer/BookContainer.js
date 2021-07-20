import BookPanel from '../BookPanel/BookPanel';

function BookContainer({ booklist }){
    const bookList = booklist

    return(
        <div className="container-fluid d-flex flex-row flex-wrap">
            { bookList.map(book => 
                <BookPanel key={book.book_id} book={book} id={book.book_id} />)
            }
        </div>
    )
}

export default BookContainer;