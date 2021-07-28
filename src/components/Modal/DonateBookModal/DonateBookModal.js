import { useEffect, useState } from "react";

function DonateBookModal(){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishedDate, setPublishDate] = useState("");
    const [description, setDescription] = useState("");
    const [bookFile, setBookFile] = useState(null);

    const [isInputMissing, setIsInputMissing] = useState(false)

    useEffect(() => {
        title != "" ? setIsInputMissing(true) : setIsInputMissing(false)
        author != "" ? setIsInputMissing(true) : setIsInputMissing(false)
        publishedDate != "" ? setIsInputMissing(true) : setIsInputMissing(false)
        description != "" ? setIsInputMissing(true) : setIsInputMissing(false)
        bookFile != null ? setIsInputMissing(true) : setIsInputMissing(false)
    })

    return(
        <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form className="row g-3 needs-validation" noValidate>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Donate Book</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <label htmlFor="bookTitle" className="form-label me-2">Title</label>
                                <input type="text" className="form-control" id="bookTitle" placeholder="Title" required onChange={event => setTitle(event.target.value)}></input>
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="bookAuthor" className="form-label me-2">Author</label>
                                <input type="text" className="form-control" id="bookAuthor" placeholder="Author" required onChange={event => setAuthor(event.target.value)}></input>
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="bookAuthor" className="form-label me-2">Publish Year</label>
                                <input type="number" className="form-control" id="bookAuthor" placeholder="Publish Year" required onChange={event => setPublishDate(event.target.value)}></input>
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="bookTitle" className="form-label me-2">Book Description</label>
                                <textarea className="form-control" placeholder="Description" required onChange={event => setDescription(event.target.value)}></textarea>
                            </div>
                            <div className="input-group mb-3">
                                <input type="file" className="form-control" id="inputGroupFile01" required onChange={event => setBookFile(event.target.files[0])}></input>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#credentialModal" disabled={!isInputMissing}>Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DonateBookModal;