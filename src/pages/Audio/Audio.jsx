import React, { useEffect, useState } from 'react'
import styles from './Audio.module.css'
import fav from '../../assets/fav.png'
import vk from '../../assets/vk.png'
import insta from '../../assets/insta.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import AudioPlayer from './AudioPlayer'
import colum from '../../assets/colum.png'
import pause from '../../assets/pause.png'
import key from '../../assets/key.png'
import left from '../../assets/left.png'
import right from '../../assets/right.png'



const Audio = () => {
    const [audioData, setAudioData] = useState([]);
    const [startImg, setStartImg] = useState(0);

    const handleLeftClick = () => {
        if (startImg > 0) {
            setStartImg(startImg - 1);
        }
    };
    const handleRightClick = () => {
        if (startImg + 5 < audioData.length) {
            setStartImg(startImg + 1);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://6636002d415f4e1a5e25f5e0.mockapi.io/books');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAudioData(data);
            } catch (error) {
                console.error('error data:', error);

            }
        };
        fetchData();
    }, [])


    return (
        <div className={styles.containerAll}>
            <div className={styles.containerAuido}>
                <div className={styles.important} >
                    {audioData.slice(0, 1).map(item => (
                        <div className={styles.toping} key={item.id}>
                            <img className={styles.bookin} src={item.avatar} alt="" />
                            <div className={styles.text}>
                                <p className={styles.imp}>Главная страница / Гарри Поттер и орден Феникса</p>
                                <h1>{item.name}</h1>
                                <p className={styles.author}>{item.author}</p>
                                <p className={styles.price}>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.detail}>
                    <div className={styles.detOne}>
                        <p className={styles.limitation}>18+</p>
                        <img src={fav} alt="" />
                    </div>
                    <button className={styles.btn}>Отправить на рабочий стол</button>
                    <div className={styles.detImages}>
                        <img src={vk} alt="" />
                        <img src={insta} alt="" />
                        <img src={facebook} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.musik}>
                <AudioPlayer />
            </div>
            <div className={styles.detContainer}>
                <div className={styles.upper}>
                    <img src={colum} alt="" />
                    <img className={styles.imgUp} src={colum} alt="" />
                    Трек 03. § 1. Россия и Европа в конце семнадцатого века.mp3
                </div>
                <div className={styles.upper}>
                    <img src={pause} alt="" />
                    Трек 03. § 1. Россия и Европа в конце семнадцатого века.mp3
                </div>
                <div className={styles.upper}>
                    <img src={key} alt="" />
                    Трек 03. § 1. Россия и Европа в конце семнадцатого века.mp3
                </div>
            </div>

            <div className={styles.selecCon}>
                <h2>Книги в подборке</h2>
                <div className={styles.selection}>
                    <div className={styles.icon}>
                        <img src={left} onClick={handleLeftClick} />
                    </div>
                    {audioData.slice(startImg, startImg + 5).map(item => (
                        <div className={styles.select} key={item.id}>
                            <img src={item.avatar} alt="" />
                            <p className={styles.auth}>{item.author}</p>
                            <p className={styles.pric}>{item.name}</p>
                        </div>
                    ))}
                    <div className={styles.icon}>
                        <img src={right} onClick={handleRightClick} />
                    </div>
                </div>
            </div>
            <div className={styles.additionCon}>
                <h2>Дополнительные материалы</h2>
                <div className={styles.additionAll}>
                    {audioData.slice(0, 1).map(item => (
                        <div className={styles.addition} key={item}>
                            <img src={item.avatar} alt="" />
                            <p>Постер с героями фильма</p>
                        </div>
                    ))}
                    {audioData.slice(0, 1).map(item => (
                        <div className={styles.addition} key={item}>
                            <img src={item.avatar} alt="" />
                            <p>Блокнот с главными героями</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.authorCon}>
                <h2>Об авторе Факты о книге</h2>
                {audioData.slice(0, 1).map(item => (
                    <div className={styles.Information} key={item}>
                        <img src={item.avatar} alt="" />
                        <div className={styles.authorInfa}>
                            <p className={styles.person}>{item.author}</p>
                            <p className={styles.infa}>Идея этой доброй семейной комедии родилась весной 2019 года, когда актер, режиссёр и сценарист Кирилл Плетнёв
                                <br />
                                представил кинокомпании «Окапи продакшн» сценарий МОЙ ПАПА – ВОЖДЬ. Необычность и небанальность предложенного
                                <br />
                                материала произвела впечатление на продюсеров, поэтому решение взять проект в производство было принято немедленно.
                                <br />
                                И уже 30 апреля 2019 года кинокомпания «Окапи продакшн» и «Русское радио» объявили.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.reviewsCon}>
                <h2>Отзывы / Рецензии</h2>
                <div className={styles.reviewsInfa}>
                    <div className={styles.reviewsFirst}>
                        <p className={styles.data}>8 июля 2022</p>
                        <p className={styles.textInfa}>Идея этой доброй семейной комедии
                            <br /> родилась весной 2019 года, когда
                            <br /> актер, режиссёр и сценарист Кирилл Плетнёв представил кинокомпании
                            <br /> «Окапи продакшн» сценарий МОЙ
                            <br /> ПАПА – ВОЖДЬ.</p>
                    </div>
                    <div className={styles.reviewsSecond}>
                        <p className={styles.data}>12 июля 2022</p>
                        <p className={styles.textInfa}>Идея этой доброй семейной комедии
                            <br /> родилась весной 2019 года, когда
                            <br /> актер, режиссёр и сценарист Кирилл Плетнёв представил кинокомпании
                            <br /> «Окапи продакшн» сценарий МОЙ
                            <br /> ПАПА – ВОЖДЬ. Необычность и
                            <br /> небанальность предложенного
                            <br /> материала произвела впечатление на
                            <br /> продюсеров, поэтому решение взять
                            <br /> проект в производство было принято
                            <br /> немедленно.</p>
                    </div>
                    <div className={styles.reviewsThrith}>
                        <p className={styles.data}>16 июля 2022</p>
                        <p className={styles.textInfa}>Идея этой доброй семейной комедии
                            <br /> родилась весной 2019 года, когда
                            <br /> актер, режиссёр и сценарист Кирилл Плетнёв представил кинокомпании
                            <br /> «Окапи продакшн» сценарий МОЙ
                            <br /> ПАПА – ВОЖДЬ. Необычность и
                            <br /> небанальность предложенного
                            <br /> материала произвела впечатление.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Audio