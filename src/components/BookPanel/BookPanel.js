import { Link } from 'react-router-dom';
import './BookPanel.css';

function BookPanel({ book, id }){
    const khmerPatt = /[\u1780-\u17ff]/;

    return(
        <Link to={{ pathname: `/book/${id}`, state: {bookObj: book}, search: 'chapter=1'}} className="BookPanel card my-4 mx-3">
            <img className="card-img-top p-3 mx-auto" src={book.thumbnail_url} alt={book.title}></img>
            <div className="card-body">
                <h4 lang={khmerPatt.test(book.title) ? "kh" : "en"} className="card-title fw-bold">{book.title}</h4>
                <p lang={khmerPatt.test(book.author) ? "kh" : "en"} className="card-text">{book.author}</p>
                <p lang={khmerPatt.test(book.published_date) ? "kh" : "en"} className="card-text">{book.published_date}</p>
            </div>
            <a href="#" className="btn book-panel-btn-primary">Read Now</a>
        </Link>
    )
}

export default BookPanel;