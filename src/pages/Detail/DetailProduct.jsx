import * as React from 'react';
import cls from "./DetailProduct.module.css"
import Rating from '@mui/material/Rating';
import vk from "../../assets/vk.png"
import inst from "../../assets/insta.png"
import facebook from "../../assets/facebook.png"
import youtube from "../../assets/youtube.png"
import { useState, useEffect } from 'react';
import axios from 'axios';
import oran from "../../assets/orange.png"
import icon from "../../assets/Icon.png"
import taik from "../../assets/tainik.png"
import harrypt from "../../assets/harrypotter.png"
import notes from "../../assets/notes.png"
import { useDispatch } from 'react-redux';
import { showAlert } from '../../store/slices/alertSlice';

const DetailProduct = () => {
  const [value, setValue] = useState(null); 
  const [selectedBook, setSelectedBook] = useState(null);
  const [valuue, setValuestar] = useState(2);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showAlert());
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6636002d415f4e1a5e25f5e0.mockapi.io/books');
        setValue(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (value) {
      const book = value.find(book => book.id === "1"); 
      setSelectedBook(book);
    }
  }, [value]);

  return (
    <div>
      <div className={cls.detail}>
        <div className={cls.pict}>
          <img className={cls.cover} src={selectedBook?.avatar} alt=""/> 
          <div className={cls.kim}>
            <img className={cls.orang} src={oran} alt="" /> <p className={cls.list}>Слушать фрагмент</p>
          </div>
        </div>
        <div className={cls.data}>
          <div className={cls.dnote}>
          <h2 className={cls.name}>{selectedBook?.name}</h2>
          <div className={cls.icon}>
            <div className={cls.orange}><p className={cls.tepxt}>18+</p></div>
            <img className={cls.note} src={notes} alt="" onClick={handleClick} />
          </div>
          </div>
          <div className={cls.ratings}>
          <div className={cls.read}>
            <h4 className={cls.author}>
              Автор: {selectedBook?.author}<br />             
              Читатает:
            </h4>
          </div>
            <h3 className={cls.ball}>5,7</h3><p className={cls.dt}>Рейтинг аудитерии <br />35 784 оценок</p>
          </div>
          {selectedBook && (
            <div>
              <p></p>
            </div>
          )}
          <p className={cls.textp}>До рождения Гарри в 1980 году провидица Сивилла Трелони произнесла в беседе с главой <br />
           Хогвартса Дамблдором пророчество о том, что в конце июля родится мальчик, родители <br />
           которого три раза бросали вызов вступившему на путь зла бывшему ученику Хогвартса <br />
           Волан-де-Морту, и который или сможет победить Тёмного Лорда, или погибнет от его рук. <br />
           Под условия пророчества подходили Гарри Поттер и родившийся на день раньше сын <br />
           мракоборцев Фрэнка и Алисы Невилл Долгопупс. Лорд Волан-де-Морт, узнав о пророчестве </p>
           <div className={cls.applications}>
             <img className={cls.appl} src={vk} alt="" />
             <img className={cls.appl} src={inst} alt="" />
             <img className={cls.appl} src={facebook} alt="" />
             <img className={cls.appl} src={youtube} alt="" />
           </div>
           <button className={cls.buy}>{selectedBook ? `Купить за ${selectedBook.price} сом` : 'Загрузка...'}</button> {/* Добавление условия для отображения цены */}
           <button className={cls.main}>Отправить на рабочий стол</button>
        </div>
      </div>
      <div className={cls.materials}>
        <h2 className={cls.h2text}>Дополнительные материалы</h2>
       <div className={cls.harrypotter}>
        <img src={harrypt} alt="" /> <h4 className={cls.poterh4}>Постер с героями <br /> фильма</h4>
        <img src={harrypt} alt="" /> <h4 className={cls.poterh4}>Блокнот с главными <br /> героями</h4>
       </div>
      </div>
      <div className={cls.contents}>
        <h2 className={cls.h2text}>Содержание книги</h2>
        <p className={cls.pptext}>18 частей / 23 часа 15 минут</p>
        <div className={cls.cont}><img className={cls.contimg} src={oran} alt=""/><p className={cls.text}>Трек 03. § 1. Россия и Европа в конце семнадцатого века.mp3</p></div>
        <div className={cls.cont}><img className={cls.contimg} src={oran} alt=""/><p className={cls.text}>Трек 03. § 1. Россия и Европа в конце семнадцатого века.mp3</p></div>
        <div className={cls.cont}><img className={cls.contimg} src={icon} alt="" /><p className={cls.text}>Трек 03. § 1. Россия и Европа в конце семнадцатого века.mp3</p></div>
      </div>
      <div className={cls.reviews}>
        <h2 className={cls.h2text}>Отзывы / Рецензии</h2>
        <div className={cls.review}>
          <div className={cls.box}>
            <h5 className={cls.h5text}>16 июля 2022</h5>
            <div className={cls.stars}>
            <Rating
             name="simple-controlled"
             value={valuue} 
             onChange={(event, newValue) => {
             setValuestar(newValue);
            }}
            />
            </div>
            <p className={cls.ptext}>Идея этой доброй семейной комедии <br />
               родилась весной 2019 года, когда <br />
               актер, режиссёр и сценарист Кирилл <br />
               Плетнёв представил кинокомпании <br /> «Окапи продакшн» сценарий МОЙ <br /> ПАПА – ВОЖДЬ.</p>
          </div>
          <div className={cls.box1}>
            <h5 className={cls.h5text}>12 июля 2022</h5>
            <div className={cls.stars}>
            <Rating
             name="simple-controlled"
             value={valuue}
             onChange={(event, newValue) => {
              setValuestar(newValue);
              }}
             />
            </div>
            <p className={cls.ptext}>Идея этой доброй семейной комедии <br />
               родилась весной 2019 года, когда <br />
               актер, режиссёр и сценарист Кирилл <br />
               Плетнёв представил кинокомпании <br /> «Окапи продакшн» сценарий МОЙ <br /> ПАПА – ВОЖДЬ. Необычность и <br />
               небанальность предложенного <br /> материала произвела впечатление на <br /> продюсеров, поэтому решение взять <br />
               проект в производство было принято <br /> немедленно.
            </p>
          </div>
          <div className={cls.box2}>

       <h5 className={cls.h5text}>16 июля 2022</h5>
       <div  className={cls.stars}>
       <Rating
        name="simple-controlled"
        value={valuue}
        onChange={(event, newValue) => {
        setValuestar(newValue);
     }}/>
       </div>
       <p className={cls.ptext}>Идея этой доброй семейной комедии <br />
        родилась весной 2019 года, когда <br />
        актер, режиссёр и сценарист Кирилл <br />
        Плетнёв представил кинокомпании <br /> «Окапи продакшн» сценарий МОЙ <br /> ПАПА – ВОЖДЬ.Необычность и <br />
        небанальность предложенного <br /> материала произвела впечатление.</p>
        </div>
        </div>
      </div>
      <div className={cls.book}>
        <div className={cls.tabout}>
          <div className={cls.hov}>
            <h2 className='auth'>Об авторе</h2>
          </div>
          <div className={cls.facts}>
           <h2 className='fact'>Факты о книге</h2>
          </div>
        </div>
        <div className={cls.given}>
          <img className={cls.salamat} src={selectedBook?.avatar} alt="" />
          <h4 className={cls.h4text}>{selectedBook?.author}</h4>
          <p className={cls.ptextp}>Идея этой доброй семейной комедии родилась весной 2019 года, когда актер, режиссёр и сценарист Кирилл Плетнёв <br />
            представил кинокомпании «Окапи продакшн» сценарий МОЙ ПАПА – ВОЖДЬ. Необычность и небанальность предложенного  <br />
            материала произвела впечатление на продюсеров, поэтому решение взять проект в производство было принято немедленно. <br />
            И уже 30 апреля 2019 года кинокомпания «Окапи продакшн» и «Русское радио» объявили.</p>
        </div>
      </div>
      <div className={cls.audio}>
       <img className={cls.tain} src={taik} alt="" />
       <div className={cls.tainik}>
        <h4 className={cls.texth4}>«Линкольн» для адвоката</h4>
        <p className={cls.textau}>Даже полтора часа в день (в среднем столько занимает время <br />
         на дорогу в мегаполисе на работу и домой), посвященных </p>
         <p className={cls.textpp}>{selectedBook?.author}</p>
       </div>
       <div className={cls.butt}>
        <button className={cls.btnau}>Купить за {selectedBook?.price} сом</button>
       </div>
      </div>
        <h3 className={cls.texth3}>Книги  в подборке</h3>
      <div className={cls.cart}>
  {value ? (
    value.slice(0, 5).map((book) => (
      <li key={book.id}>
          <img
            style={{ borderRadius: '20px', marginRight: '10px' }}
            className={cls.cartimg}
            src={book.avatar}
            alt=""
          />
        <p style={{ color: '#ADADAD', marginBottom: '5px' }}>
          {book.author.trim()}
        </p>
        <p style={{ color: '#ffffff', fontSize: '16px', marginBottom: '5px' }}>
          {book.name.replace(/\./g, '').trim().split(" ").join(" ")}
        </p>
      </li>
    ))
  ) : (
    <p>Loading...</p>
  )}
</div>

    </div>
  )
}

export default DetailProduct