export const GET_BOOKS = "GET_BOOKS";
export const SET_BOOKS = "SET_BOOKS";
export const GET_CHAPTERS = "GET_CHAPTERS";
export const SET_CHAPTERS = "CHAPTERS";
export const POST_BOOK = "POST_BOOK";
export const SET_POST_BOOK_RES_STATUS = "SET_POST_BOOK_RES_STATUS"

export const getBooks = () => ({
    type: GET_BOOKS
});

export const setBooks = (books) => ({
    type: SET_BOOKS,
    books
});

export const getChapters = (book_id) => ({
    type: GET_CHAPTERS,
    book_id
});

export const setChapters = (chapters) => ({
    type: SET_CHAPTERS,
    chapters
});

export const postBook = (book) => ({
    type: POST_BOOK,
    book
});

export const setPostBookResStatus = (status) => ({
    type: SET_POST_BOOK_RES_STATUS,
    status
})

const initialState = {
    books: [],
    chapters: [],
    postBookResStatus: 0
};

export default (state = initialState, action) => {
    switch(action.type){
        case SET_BOOKS:
            const { books } = action;
            return { ...state, books };
        case SET_CHAPTERS:
            const { chapters } = action;
            return { ...state, chapters };
        case SET_POST_BOOK_RES_STATUS:
            const { status } = action;
            return { ...state, postBookResStatus: status };
        default:
            return state;
    }
}