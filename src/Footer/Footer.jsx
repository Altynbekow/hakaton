// import React from "react"
import auditoria from '../../src/assets/auditoria.svg'
import cls from './Footer.module.css'

const Footer = () => {
    return (
        <div className={cls.footerContainer}>
            <div className={cls.fot}>
                <div className={cls.imgfooter}>
                    <img src={auditoria} alt="" />
                </div>
                <div className="footer1">
                    <h3>Жанры</h3>
                    <p>Нонфикшн</p>
                    <p>Псиология</p>
                    <p>Бизнес</p>
                    <p>Финансы</p>
                    <p>Все жанры</p>
                </div>
                <div className="footer2">
                    <h3>Категории</h3>
                    <p>Популярное</p>
                    <p>Новинки</p>
                    <p>Выбор редакции</p>
                </div>
                <div className="footer3">
                    <h3>Разделы</h3>
                    <p>Как купить</p>
                    <p>Часто задаваемые вопросы</p>
                    <p>Сотрудничество</p>
                    <p>Контакты</p>
                </div>
            </div>

            <div className={cls.footeerFoot}>
                <div className={cls.foote4}>
                    <p>© 2022, «Аудитерия». Все права защищены.</p>
                    <p>Политика конфиденциальности</p>
                    <p>Лицензионное соглашение</p>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer




