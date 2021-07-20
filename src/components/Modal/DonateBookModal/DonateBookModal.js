import { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { postBook } from "../../../redux/ducks/books";

function DonateBookModal(){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishedDate, setPublishDate] = useState("");
    const [description, setDescription] = useState("");
    const [coverUrl, setCoverUrl] = useState("");
    const [bookFile, setBookFile] = useState(null);

    const [loading, setLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(null)
    const [isInputMissing, setIsInputMissing] = useState(false)

    let history = useHistory();

    useEffect(() => {
        var forms = document.querySelectorAll('.needs-validation')
        console.log(forms)

        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    event.preventDefault()
                    event.stopPropagation()

                    form.classList.add('was-validated')
                }, false)
            })
    }, [])

    const dispatch = useDispatch()
    const uploadBook = () => new Promise((resolve, reject) => {
        setLoading(true)
        setIsInputMissing(false)
        const data = new FormData()
        title != "" ? data.append('title', title) : setIsInputMissing(true)
        author != "" ? data.append('author', author) : setIsInputMissing(true)
        publishedDate != "" ? data.append('published_date', publishedDate) : setIsInputMissing(true)
        description != "" ? data.append('description', description) : setIsInputMissing(true)
        coverUrl != "" ? data.append('thumbnail_url', coverUrl) : setIsInputMissing(true)
        bookFile != null ? data.append('book_file', bookFile) : setIsInputMissing(true)

        if(!isInputMissing){
            dispatch(postBook(data))
            resolve()
        }
        else{
            setInputValidateError()
        }
    })

    const setUploadBookResponse = () => {
        console.log("called")
        setLoading(false)
        history.push('/')
    }

    const setInputValidateError = () => {
        setLoading(false)
        setIsSuccess(null)
    }

    const postBookStatus = useSelector((state) => state.books.postBookResStatus)
    console.log(postBookStatus)
    if(postBookStatus != 0){
        if(postBookStatus == 200 && isSuccess != true){
            setIsSuccess(true)
            window.location.reload()
        }
        else if (postBookStatus > 200 && isSuccess != false){
            setIsSuccess(false)
        }
    }

    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            {isSuccess != null ? ( isSuccess ? 
                <div class="alert alert-success" role="alert">
                    "Book Uploaded Successfully!"
                </div> :
                <div class="alert alert-danger" role="alert">
                    "Something went wrong!"
                </div> ) : null
            }
            <div className="modal-dialog">
                <form class="row g-3 needs-validation" novalidate>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Donate Book</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div class="input-group mb-3">
                                <label for="bookTitle" class="form-label me-2">Title</label>
                                <input type="text" class="form-control" id="bookTitle" placeholder="Title" required onChange={event => setTitle(event.target.value)}></input>
                                <div class="invalid-feedback">
                                    Please provide a book's title.
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <label for="bookAuthor" class="form-label me-2">Author</label>
                                <input type="text" class="form-control" id="bookAuthor" placeholder="Author" required onChange={event => setAuthor(event.target.value)}></input>
                                <div class="invalid-feedback">
                                    Please provide a book's author.
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <label for="bookAuthor" class="form-label me-2">Publish Year</label>
                                <input type="number" class="form-control" id="bookAuthor" placeholder="Publish Year" required onChange={event => setPublishDate(event.target.value)}></input>
                                <div class="invalid-feedback">
                                    Please provide a book's published year.
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <label for="bookTitle" class="form-label me-2">Book Description</label>
                                <textarea class="form-control" placeholder="Description" required onChange={event => setDescription(event.target.value)}></textarea>
                                <div class="invalid-feedback">
                                    Please provide a book description.
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <label for="bookCoverUrl" class="form-label me-2">Book cover url</label>
                                <input type="text" class="form-control" id="bookCoverUrl" placeholder="Book cover url" required onChange={event => setCoverUrl(event.target.value)}></input>
                                <div class="invalid-feedback">
                                    Please provide a url of book's cover image.
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <input type="file" class="form-control" id="inputGroupFile01" required onChange={event => setBookFile(event.target.files[0])}></input>
                                <div class="invalid-feedback">
                                    Please provide a book pdf file.
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {!loading ?
                                <button type="submit" className="btn btn-primary" onClick={() => uploadBook().then(() => setUploadBookResponse())}>Upload</button>
                                :
                                <button class="btn btn-primary" type="submit" disabled>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Uploading...
                                </button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DonateBookModal;

// .then(() => setUploadBookResponse()).catch(() => setInputValidateError)
// => new Promise((resolve, reject) =>