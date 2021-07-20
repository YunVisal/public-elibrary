import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Autocomplete from '../../autocomplete'

function SearchBox(){
    const books = useSelector((state) => state.books.books);
    useEffect(() => {
        var datasrc = []
        books.forEach(book => {
            const bookObj = {
                label: book.title,
                value: book.title.toLowerCase()
            }
            datasrc.push(bookObj)
        });
        const ac = new Autocomplete(document.getElementById('myAutocomplete'), {
            data: datasrc
        });
    }, []);

    return (
        <div className="SearchBox">
            <form className="d-flex" autoComplete="off">
                <input id="myAutocomplete" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
        </div>
    )
    // render(){
        
    // }
}

export default SearchBox;