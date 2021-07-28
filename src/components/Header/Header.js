import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchBox from './SearchBox';
import DonateBookModal from '../Modal/DonateBookModal/DonateBookModal';
import LoginModal from '../Modal/LoginModal/LoginModal';
import VerificationModal from '../Modal/VerificationModal/VerificationModal';

function Header(){
    let [toggleSearchBox, setToggleSearchBox] = useState(false)
    let [navItemActiveIndex, setNavItemActiveIndex] = useState(0)
    return (
        <div className="Header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-2">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">E-Library</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse dual-collapse2" id="navbarNavDropdown">
                        {toggleSearchBox ? <SearchBox /> : <i className="fa fa-search base-nav-item" aria-hidden="true" onClick={() => setToggleSearchBox(!toggleSearchBox)}></i>}
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className={`nav-link ${navItemActiveIndex === 0 ? 'active' : ''}`} to="/" onClick={() => setNavItemActiveIndex(0)}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${navItemActiveIndex === 1 ? 'active' : ''}`} to="/books/" onClick={() => setNavItemActiveIndex(1)}>Books</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Donate Books</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <DonateBookModal />
            <LoginModal />
            <VerificationModal />
        </div>
    )
}

export default Header;