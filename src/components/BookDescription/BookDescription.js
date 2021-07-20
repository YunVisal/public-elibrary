import { useEffect, useState } from 'react';
import { useLocation, useHistory, Link } from "react-router-dom";
import PdfViewer from "../PdfViewer/PdfViewer";
import { useDispatch, useSelector } from 'react-redux';
import { getChapters } from '../../redux/ducks/books';
import queryString from 'querystring';

function BookDescription(){
    let readingChapter = 0
    let startPage = null
    let endPage = null

    const location = useLocation();
    let history = useHistory();
    const book = location.state?.bookObj;
    let query = new URLSearchParams(useLocation().search);
    const chapter = query.get("chapter");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChapters(book.book_id));
    }, [dispatch]);

    const chapters = useSelector((state) => state.books.chapters);
    console.log(chapters);
    readingChapter = chapter
    try{
        startPage = chapters[readingChapter - 1].start_page
        endPage = chapters[readingChapter - 1].end_page
    }catch(e) {}

    const renderChapterSelector = () => {
        return chapters.map(chapter =>
            (chapter.chapter_id == readingChapter ? <option selected lang={khmerPatt.test(chapter.chapter_name) ? "kh" : "en"} value={chapter.chapter_id}>{chapter.chapter_name}</option> : <option lang={khmerPatt.test(chapter.chapter_name) ? "kh" : "en"} value={chapter.chapter_id}>{chapter.chapter_name}</option> )
        )
    }

    const renderPdf = (start, end) => {
        return <PdfViewer start={start} end={end} bookUrl={`http://192.168.1.25:5000/${book.book_file}`} />
    };

    const handleChapterChange = ({ target }) => {
        readingChapter = target.value
        history.push({
            pathname: `/book/${book.book_id}`,
            search: `chapter=${readingChapter}`,
            state: {
                bookObj: book,
            },
        })
    }

    const khmerPatt = /[\u1780-\u17ff]/;

    return (
        <div className="book-description my-4 mx-5">
            <div className="my-5">
                <h1 lang={khmerPatt.test(book.title) ? "kh" : "en"}>{book.title} ({book.published_date})</h1>
                <h4 lang={khmerPatt.test(book.author) ? "kh" : "en"}> {book.author} </h4>
                <hr />
                <h5>What's it about?</h5>
                <p lang={khmerPatt.test(book.author) ? "kh" : "en"}>{book.description}</p>
            </div>
            <div class="input-group my-3">
                <label for="chapterSelector" class="form-label me-2">Chapter: </label>
                {chapters[0] && <select lang={khmerPatt.test(chapters[readingChapter-1].chapter_name) ? "kh" : "en"} class="form-select" id="chapterSelector" aria-label="Chapter: " onChange={handleChapterChange}>
                    { chapters[0] && renderChapterSelector()}
                </select>}
            </div>
            {chapters[0] && renderPdf(startPage, endPage)}
            <div className="d-flex container-fluid">
                {chapters[0] && (chapters[readingChapter - 2] != null ? <Link lang={khmerPatt.test(chapters[readingChapter - 2].chapter_name) ? "kh" : "en"} to={{ pathname: `/book/${book.book_id}`, state: { bookObj: book }, search: `chapter=${chapters[readingChapter - 2].chapter_id}` }} className="mx-3 my-1">&larr; {chapters[readingChapter-2].chapter_name}</Link>: null)}
                {chapters[0] && <select lang={khmerPatt.test(chapters[readingChapter-1].chapter_name) ? "kh" : "en"} class="form-select mx-3 align-self-center" id="chapterSelector" aria-label="Chapter: " onChange={handleChapterChange}>
                    {chapters[0] && renderChapterSelector()}
                </select>}
                {chapters[0] && (chapters[readingChapter] != null ? <Link lang={khmerPatt.test(chapters[readingChapter].chapter_name) ? "kh" : "en"} to={{ pathname: `/book/${book.book_id}`, state: { bookObj: book }, search: `chapter=${chapters[readingChapter].chapter_id}` }} className="mx-3 my-1">{chapters[readingChapter].chapter_name} &rarr;</Link> : null)}
            </div>
        </div>
    )
}

export default BookDescription;