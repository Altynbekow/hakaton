import React from 'react'
import style from './Books.module.css'
import { useState } from 'react'
import { useEffect } from 'react';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const booksData = async () => {
            try {
                const response = await fetch('https://6636002d415f4e1a5e25f5e0.mockapi.io/books');
                if (!response.ok) {
                    throw new Error('network response was not ok');
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('error fathing data:', error);
            }
        };
        booksData();
    }, [])
    return (
        <div>
            <div className={style.containerBook}>
                <p className={style.breadcrumb}>Главная страница / Мои книги</p>
                <div className={style.first}>
                    <h2>Мои покупки</h2>
                    <ul className={style.bookList}>
                        {books.slice(0, 5).map(book => (
                            <li key={book.id}>
                                <img src={book.avatar} width={200} alt="" />
                                <p className={style.author}>{book.author}</p>
                                <p className={style.name}>{book.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={style.second}>
                    <h2>Продолжить прослушивание</h2>
                    <ul className={style.bookList}>
                        {books.slice(0, 5).map(book => (
                            <li key={book.id}>
                                <img src={book.avatar} width={200} alt="" />
                                <p className={style.author}>{book.author}</p>
                                <p className={style.name}>{book.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Books