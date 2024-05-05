
import cls from './Hero.module.css';
import logo from '../../assets/logo.png'
import street from '../../assets/street.png'
import rest from '../../assets/rest.png'
import study from '../../assets/study.png'
import work from '../../assets/work.png'

import micro from '../../assets/micro.svg'
import kal from '../../assets/kalendar.svg'
import music from '../../assets/music.svg'
import book from '../../assets/book.svg'

import net from '../../assets/netflix.svg'
import amazon from '../../assets/amazon.svg'
import avon from '../../assets/avon.svg'
import audi from '../../assets/auditeria.svg'
import dell from '../../assets/dell.svg'

import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

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
        <img width={1400} src={logo} alt=""/>
        <h1>Книги, которые<br/>вам хочется слушать</h1>
        <p>Лучшая подборка аудиокниг по психологии и саморазвитию за все годы издательства...</p>
        <button>Выбрать книгу</button>
      </div>
      <div className='container bg'>
        <h1 style={{marginBottom: '39px', color: 'white', fontSize: '32px'}}>Популярное</h1>
        <div className={cls.cart}>
          {books.slice(0, 5).map(book => (
            <li key={book.id}>
              {/*<Link to={`/books/${book.id}`}>*/}
              <img style={{borderRadius: '20px'}} className={cls.cartimg} src={book.avatar} alt=""/>
              <p style={{color: '#ADADAD'}}>{book.author}</p>
              <p style={{color: '#FFFFFF', fontSize: '16px'}}>{book.name}</p>
              {/*</Link>*/}
            </li>
          ))}
        </div>
        <div className={'container'}>
          <h1 style={{marginBottom: '39px', color: 'white', marginTop: '97px'}}>Выбор редакции</h1>
          <div className={cls.cart}>
            {books.slice(5, 10).map(book => (
              <li key={book.id}>
                {/*<Link to={`/books/${book.id}`}>*/}
                <img style={{borderRadius: '20px'}} className={cls.cartimg} src={book.avatar} alt=""/>
                <p style={{color: '#ADADAD'}}>{book.author}</p>
                <p style={{color: '#FFFFFF', fontSize: '16px'}}>{book.name}</p>
                {/*</Link>*/}
              </li>
            ))}
          </div>
        </div>
        <div className={'container'}>
          <h1 style={{
            marginBottom: '39px',
            color: 'white',
            marginTop: '97px',
            display: "flex",
            gap: '15px'
          }}>Новинки <span style={{color: '#EC8F32'}}>Популярное</span> <span
            style={{color: '#EC8F32'}}>Выбор редакции</span></h1>
          <div className={cls.cart}>
            {books.slice(5, 10).map(book => (
              <li key={book.id}>
                {/*<Link to={`/books/${book.id}`}>*/}
                <img style={{borderRadius: '20px'}} className={cls.cartimg} src={book.avatar} alt=""/>
                <p style={{color: '#ADADAD'}}>{book.author}</p>
                <p style={{color: '#FFFFFF', fontSize: '16px'}}>{book.name}</p>
                {/*</Link>*/}
              </li>
            ))}
          </div>
        </div>
        <div className={'container bt'}>
          <div className={cls.cart}>
            {books.slice(0, 5).map(book => (
              <li key={book.id}>
                {/*<Link to={`/books/${book.id}`}>*/}
                <img style={{borderRadius: '20px'}} className={cls.cartimg} src={book.avatar} alt=""/>
                <p style={{color: '#ADADAD'}}>{book.author}</p>
                <p style={{color: '#FFFFFF', fontSize: '16px'}}>{book.name}</p>
                {/*</Link>*/}
              </li>
            ))}
          </div>
        </div>
        <div>
          <h1 style={{color: 'white', marginTop: '97px', marginBottom: '39px'}}>Подборки</h1>
          <div className={cls.post}>
            <div className={cls.absol}>
              <img style={{borderRadius: '25px'}} src={street} alt=""/>
              <h5>В дороге</h5>
            </div>
            <div className={cls.absol}>
              <img style={{borderRadius: '25px'}} src={rest} alt=""/>
              <h5>Для отдыха</h5>
            </div>
            <div className={cls.absol}>
              <img style={{borderRadius: '25px'}} src={study} alt=""/>
              <h5>Для учебы</h5>
            </div>
            <div className={cls.absol}>
              <img style={{borderRadius: '25px'}} src={work} alt=""/>
              <h5>Для работы</h5>
            </div>
          </div>
        </div>
        <div className={'container'}>
          <div className={cls.cartochka}>
          <div className={cls.br}>
            <img  style={{marginLeft:'35px', marginTop:'50px', position:'absolute'}} src={micro} alt=""/>
            <p >Все лучшие новинки нон фикшн<br/>
              книг и образовательные саммари<br/>
              всегда под рукой.</p>
          </div>
          <div className={cls.br}>
            <img  style={{marginLeft:'35px', marginTop:'50px', position:'absolute'}} src={kal} alt=""/>
            <p>Аудиокнига по дороге на работу<br/>
              и обратно, подарит вам почти <br/>
              месяц чтения за год</p>
          </div>
          <div className={cls.br}>
            <img  style={{marginLeft:'35px', marginTop:'50px', position:'absolute'}} src={music} alt=""/>
            <p>Аудиокниги позволяют «читать»<br/>
              несколько часов в день без отрыва <br/>
              от текущих дел.</p>
          </div>
          <div className={cls.br}>
            <img  style={{marginLeft:'35px', marginTop:'50px', position:'absolute'}} src={book} alt=""/>
            <p>Лучшие книги и аудиоспектакли<br/>в живом исполнении</p>
          </div>
          </div>
        </div>
        <div className={'container'}>
          <div className={cls.office}>
            <img src={net} alt=""/>
            <img src={amazon} alt=""/>
            <img src={avon} alt=""/>
            <img src={audi} alt=""/>
            <img src={dell} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
