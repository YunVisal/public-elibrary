import { call, put } from "@redux-saga/core/effects"
import { setBooks, setChapters, setPostBookResStatus } from "../../ducks/books";
import { requestGetBook, requestGetChapter, requestPostBook } from "../request/books"

export function* handleGetBooks(){
    try{
        const res = yield call(requestGetBook);
        const data = res.data;
        yield put(setBooks(data))
    }catch(err){
        console.log(err);
    }
}

export function* handleGetChapters(action) {
    try {
        const res = yield call(requestGetChapter, action.book_id);
        const data = res.data;
        yield put(setChapters(data))
    } catch (err) {
        console.log(err);
    }
}

export function* handlePostBook(action) {
    try {
        const res = yield call(requestPostBook, action.book);
        console.log(res)
        const status = res.status;
        yield put(setPostBookResStatus(status))
    } catch (err) {
        console.log(err);
        const status = 500;
        yield put(setPostBookResStatus(status))
    }
}