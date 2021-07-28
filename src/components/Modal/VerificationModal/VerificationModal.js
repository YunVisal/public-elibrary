import { useState, useEffect } from 'react';

function VerificationModal(){
    const [code, setCode] = useState("");

    const [isInputMissing, setIsInputMissing] = useState(false)

    useEffect(() => {
        code != "" ? setIsInputMissing(true) : setIsInputMissing(false)
    })

    return (
        <div className="modal fade" id="verificationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form className="row g-3 needs-validation" noValidate>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Phone Number Verfication</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="mb-3">Please check your message inbox and complete the verification code.</p>

                            <label htmlFor="verificationCode" className="form-label me-2">Verification Code</label>
                            <input type="number" className="form-control mb-4" id="verificationCode" placeholder="Verification Code" required onChange={event => setCode(event.target.value)}></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#credentialModal">Back</button>
                            <button type="submit" className="btn btn-primary" disabled={!isInputMissing}>Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VerificationModal;