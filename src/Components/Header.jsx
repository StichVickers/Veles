import React, { useState, useEffect } from 'react';
import './header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Modal from './Registration.jsx';
import ModalAuth from "./Auth.jsx";
import { Link } from 'react-router-dom';

function Header() {
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveAuth, setModalActiveAuth] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const saveUserDataToLocalStorage = (userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    const removeUserDataFromLocalStorage = () => {
        localStorage.removeItem('userData');
    };
    useEffect(() => {
        const userDataFromLocalStorage = localStorage.getItem('userData');
        if (userDataFromLocalStorage) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (userData) => {
        setIsLoggedIn(true);
        saveUserDataToLocalStorage(userData);
        setModalActiveAuth(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        removeUserDataFromLocalStorage(); 
    };

    return (

            <body>
            <header className="header">
                <Link to="/" className="item-link">
                    <div className="logo">
                        <span className="logo-text">Велес</span>
                        <span className="logo-text-small">Монтаж авто полива</span>
                    </div>
                </Link>
                <Link to="/Calc" className='calc'>
                <button className="calc-button">Калькулятор</button>
                </Link>
                <div className="icon-links">
                    <Link to="/o_nas" className="item-link">
                        <a href="#">
                            <i className="fas fa-info-circle"></i>
                            <span>о нас</span>
                        </a>
                    </Link>
                    <Link to="/tarif" className="item-link">
                        <a href="#">
                            <i className="fas fa-address-book"></i>
                            <span>Тариф</span>
                        </a>
                    </Link>
                    <Link to="/Comm" className="item-link">
                        <a href="#">
                            <i className="fas fa-comments"></i>
                            <span>Комментарии</span>
                        </a>
                    </Link>
                    {isLoggedIn ? (
                        <button className='open-btn' onClick={handleLogout}>Выход</button>
                    ) : (
                        <div className="auth-links">
                            <button className='open-btn' onClick={() => setModalActive(true)}>Регистрация</button>
                            <Modal active={modalActive} setActive={setModalActive} />
                            <span>/</span>
                            <button className='open-btn' onClick={() => setModalActiveAuth(true)}>Вход</button>
                            <ModalAuth activeAuth={modalActiveAuth} setActiveAuth={setModalActiveAuth} onLogin={handleLogin} />

                        </div>
                    )}
                </div>
            </header>
        </body>
    );
}

export default Header;

