import { takeLatest, all } from "@redux-saga/core/effects";
import { GET_BOOKS, GET_CHAPTERS, POST_BOOK } from '../ducks/books'
import { handleGetBooks, handleGetChapters, handlePostBook } from "./handler/books";

function* fetchBookSaga() {
    yield takeLatest(GET_BOOKS, handleGetBooks);
}

function* fetchChapterSaga() {
    yield takeLatest(GET_CHAPTERS, handleGetChapters);
}

function* postBookSaga() {
    yield takeLatest(POST_BOOK, handlePostBook);
}

export function* watcherSaga(){
    yield all([
        fetchBookSaga(),
        fetchChapterSaga(),
        postBookSaga()
    ])
}