// import cls from  './Hero.module.css';
// import logo from '../../assets/logo.png'
//
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import {Link} from "react-router-dom";
//
//
//
//
//
//
//
// const Hero = () => {
//   const [books, setBooks] = useState([]);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://6636002d415f4e1a5e25f5e0.mockapi.io/books');
//         setBooks(response.data);
//
//       } catch (error) {
//         console.log('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <div className='container'>
//       <div className={cls.flex}>
//         <img width={1250} src={logo} alt=""/>
//       <h1>Книги, которые<br/>
//         вам хочется слушать</h1>
//         <p>Лучшая подборка аудиокниг по психологиии<br/>
//           саморазвитию за все годы издательства...</p>
//           <button>Выбрать книгу</button>
//       </div>
//       <div>
//         <h1>Популярное</h1>
//         <Link to=''>
//         {books.map(book => (
//           <li key={book.id}>
//             <img width={200} src={book.avatar} alt=""/>
//             <p>{book.author}</p>
//             <h6>{book.name}</h6>
//
//             <p>{book.price}</p>
//           </li>
//         ))}
//         </Link>
//
//
//       </div>
//     </div>
//   );
// };
//
// export default Hero;
import cls from  './Hero.module.css';
import logo from '../../assets/logo.png'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Hero = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6636002d415f4e1a5e25f5e0.mockapi.io/books');
        setBooks(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className={cls.flex}>
        <img width={1250} src={logo} alt=""/>
        <h1>Книги, которые<br/>вам хочется слушать</h1>
        <p>Лучшая подборка аудиокниг по психологии и саморазвитию за все годы издательства...</p>
        <button>Выбрать книгу</button>
      </div>
      <div className={cls.carts}>
        <div>
        <h1>Популярное</h1>
        </div>
          {books.map(book => (
            <li key={book.id}>
              {/*<Link to={`/books/${book.id}`}>*/}
                <img width={200} src={book.avatar} alt=""/>
                <p>{book.author}</p>
                <h6>{book.name}</h6>
                <p>{book.price}</p>
              {/*</Link>*/}
            </li>
          ))}
      </div>
    </div>
  );
};

export default Hero;
