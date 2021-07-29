import { useState, useEffect } from 'react';
import PhoneNumberInput from './PhoneNumberInput';


function LoginModal(){
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(null);

    const [isInputMissing, setIsInputMissing] = useState(false)

    useEffect(() => {
        username != "" ? setIsInputMissing(true) : setIsInputMissing(false)
        phoneNumber != null ? setIsInputMissing(true) : setIsInputMissing(false)
    })

    onsubmit = e => {
        e.preventDefault()
        console.log(phoneNumber)
    }

    return (
        <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form className="row g-3 needs-validation" noValidate>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="phone" className="form-label me-2">What's your phone number?</label>
                            <br />
                            <PhoneNumberInput setPhoneNumber={setPhoneNumber} />

                            <label htmlFor="username" className="form-label mt-4 me-2">What's your name?</label>
                            <input type="text" className="form-control mb-4" id="username" placeholder="What's your name?" required onChange={event => setUsername(event.target.value)}></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#exampleModal">Back</button>
                            <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#verificationModal" disabled={!isInputMissing}>Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginModal;