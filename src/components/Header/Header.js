import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchBox from './SearchBox';
import DonateBookModal from '../Modal/DonateBookModal/DonateBookModal';

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
                    <div className="collapse navbar-collapse dual-collapse2" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <div className="d-flex">
                                    <li className="nav-link dropdown">
                                        <a className="d-flex align-items-center text-secondary dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            You
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">View Profile</a></li>
                                            <li><hr className="dropdown-divider"></hr></li>
                                            <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
                                        </ul>
                                    </li>
                                    <img className="d-inline-block" src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png" width="40" height="40"></img>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <DonateBookModal />
        </div>
    )
}

export default Header;