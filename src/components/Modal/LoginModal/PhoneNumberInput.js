import { useEffect } from 'react';

function PhoneNumberInput({ setPhoneNumber }){
    let phoneInput = null

    useEffect(() => {
        const phoneInputField = document.querySelector("#phone");
        phoneInput = window.intlTelInput(phoneInputField, {
            utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            initialCountry: "kh"
        });
        phoneInputField.onchange = () => {
            console.log(phoneInput.getNumber())
            setPhoneNumber(phoneInput.getNumber())
        }
    }, [])

    return (
        <input type="tel" className="form-control mb-4" id="phone" placeholder="Phone Number" required></input>
    )
}

export default PhoneNumberInput;