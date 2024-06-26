import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Registration.css';

const Modal = ({ active, setActive }) => {
    const [formData, setFormData] = useState({
        login: "",
        password: ""
    });

    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckboxChange = () => {
        setAgreeTerms(!agreeTerms);
    };

    const validateEmail = (login) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(login).toLowerCase());
    };

    const handleSubmit = async () => {
        if (!formData.login) {
            toast.error("Введите login");
            return;
        }

        if (!validateEmail(formData.login)) {
            toast.error("Введите корректный login");
            return;
        }

        if (!formData.password) {
            toast.error("Введите пароль");
            return;
        }

        if (!agreeTerms) {
            toast.error("Пожалуйста, согласитесь с условиями и политикой конфиденциальности");
            return;
        }

        try {
            console.log('Submitting data:', formData);
            const response = await axios.post('https://47d2d2b2-9213-4524-8742-3623d8b28ca7-00-13g7hrjz2b4c5.pike.replit.dev/user/registration', formData);
            console.log('Response data:', response.data);
            setActive(false);
            toast.success("Регистрация прошла успешно!");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Ошибка при отправке запроса:", error.message);
                if (error.response) {
                    console.error("Data:", error.response.data);
                    console.error("Status:", error.response.status);
                    console.error("Headers:", error.response.headers);
                    if (error.response.status === 404) { 
                        toast.error("Пользователь с таким email уже зарегистрирован");
                    } else {
                        toast.error(`Ошибка сервера: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
                    }
                } else if (error.request) {
                    toast.error("Ошибка запроса: нет ответа от сервера");
                } else {
                    toast.error(`Ошибка: ${error.message}`);
                }
            } else {
                console.error("Unexpected error:", error);
                toast.error("Произошла непредвиденная ошибка");
            }
        }
    };

    return (
        <>
        <div className={`modal-overlay ${active ? "active" : ""}`} onClick={() => setActive(false)}></div>
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <input
                    type="email"
                    name="login"
                    value={formData.login}
                    onChange={handleChange}
                    placeholder="Email(Логин)"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Пароль"
                />
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="termsCheckbox"
                        checked={agreeTerms}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="termsCheckbox">
                        <span>Я соглашаюсь с <a href="/privacy" target="_blank">политикой конфиденциальности</a></span>
                    </label>
                </div>
                <button onClick={handleSubmit}>Регистрация</button>
            </div>
            <ToastContainer />
        </div>
        </>
    );
};

export default Modal;