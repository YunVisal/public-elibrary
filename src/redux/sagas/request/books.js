export function requestGetBook(){
    var axios = require("axios").default;
    var options = {
        method: 'GET',
        url: 'http://192.168.1.25:5000/book',
    };
    return axios.request(options);
}

export function requestGetChapter(book_id) {
    var axios = require("axios").default;
    var options = {
        method: 'GET',
        url: `http://192.168.1.25:5000/chapter/${book_id}`,
    };
    return axios.request(options);
}

export function requestPostBook(book) {
    var axios = require("axios").default;
    var options = {
        method: 'POST',
        url: 'http://192.168.1.25:5000/book',
        data: book
    };
    return axios.request(options);
}