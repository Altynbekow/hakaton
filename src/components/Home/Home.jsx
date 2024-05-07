import React from 'react';
import cls from "../hero/Hero.module.css";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div className={'container'}>
        <div className={cls.flex}>
          <img width={1400} src={logo} alt=""/>
          <h1>Книги, которые<br/>вам хочется слушать</h1>
          <p>Лучшая подборка аудиокниг по психологии и саморазвитию за все годы издательства...</p>
          <button>Выбрать книгу</button>
        </div>
    </div>
  );
};

export default Home;