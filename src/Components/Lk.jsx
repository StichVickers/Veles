import React from 'react';
import { Link } from 'react-router-dom';
import './Lk.css';
const ProfilePage = () => {
    return (
        <div className="glv">
        <div className="profile-page">
            <div className="sidebar">
                <div className="menu-item"><Link to="/Profile">Мой профиль</Link></div>
                <div className="menu-item"><Link to='/'>Заказы</Link></div>
                <div className="menu-item"><Link to='/'>На Главную</Link></div>
            </div>
            <div className="content">
                <h2>Мой профиль</h2>
                <form>
                    <label>
                        Логин
                        <input type="text" name="firstName" />
                    </label>
                    <label>
                        Пароль
                        <input type="text" name="middleName" />
                    </label>
                    <button className='button-lk' type="submit">Сохранить изменения</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default ProfilePage;
