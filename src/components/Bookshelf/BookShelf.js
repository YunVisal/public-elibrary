import './BookShelf.css';

import BookContainer from '../BookContainer/BookContainer';
import { useState } from 'react';

function Bookshelf({ books }){
    const [toggleFinished, setToggleFinished ] = useState(false);

    return(
        <div className="bookshelf mx-4">
            <div className="h1 my-5">Bookshelf</div>
            <hr />
            <nav className="nav nav-pills">
                <a className={`nav-link ${toggleFinished ? '' : 'active'}`} onClick={() => { setToggleFinished(false) }}>Currently Reading</a>
                <a className={`nav-link ${toggleFinished ? 'active' : ''}`} onClick={() => { setToggleFinished(true) }}>Finished</a>
            </nav>
            {books && (toggleFinished ? <BookContainer booklist={books} /> : <BookContainer booklist={books} />)}
        </div>
    )
}

export default Bookshelf;