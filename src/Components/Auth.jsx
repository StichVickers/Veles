import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Auth.css';

const ModalAuth = ({ activeAuth, setActiveAuth, onLogin }) => {
    const [formData, setFormData] = useState({
        login: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://47d2d2b2-9213-4524-8742-3623d8b28ca7-00-13g7hrjz2b4c5.pike.replit.dev/user/login', formData);
            console.log("Response data:", response.data);
            onLogin(response.data);
            setActiveAuth(false);
            toast.success("Успешная авторизация!");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Ошибка при отправке запроса:", error.message);
                if (error.response) {
                    console.error("Data:", error.response.data);
                    console.error("Status:", error.response.status);
                    console.error("Headers:", error.response.headers);
                    if (error.response.status === 401) {
                        toast.error("Неверный login или пароль.");
                    } else {
                        toast.error(`Ошибка сервера: ${error.response.status} - ${error.response.data}`);
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
        <div className={activeAuth ? "ModalAuth activeAuth" : "ModalAuth"} onClick={() => setActiveAuth(false)}>
            <div className="ModalAuth__content" onClick={e => e.stopPropagation()}>
                <input 
                    type="login" 
                    name="login" 
                    value={formData.login} 
                    onChange={handleChange} 
                    placeholder="Электронная почта"     
                />
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder="Пароль" 
                />
                <button onClick={handleSubmit}>Войти</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ModalAuth;