import React, { useState } from 'react';
import SingUp from '../components/singUp/SingUp';
import SingIn from '../components/singIn/SingIn';
import Books from '../pages/Books/Books';
import Audio from '../pages/Audio/Audio';
import style from './Layout.module.css'

const Layout = () => {
    const [content, setContent] = useState('');

    const handleClickSingIn = () => {
        setContent('Sing in');
    };

    const handleClickSingUp = () => {
        setContent('Sing Up');
    };

    return (
        <div>
            <div className={style.links}>
                <a href="#" onClick={handleClickSingIn} className={style.link}>Регистрация</a>
                <a href="#" onClick={handleClickSingUp} className={style.link}>Войти</a>
            </div>
            {content === "Sing in" && <SingIn />}
            {content === "Sing Up" && <SingUp />}
            <Books />
            <Audio />
        </div>
    )
}

export default Layout;
