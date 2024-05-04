import styles from './Header.module.css'

const Header = () => {
    return (
            <nav className={styles.header}>
                <div>
                    <img src="" alt="" />
                </div>
                <ul className={styles.ul}>
                    <li>
                        <a href="#">Как купить</a>
                    </li>

                    <li>
                        <a href="#"> F.A.Q </a>
                    </li>

                    <li>
                        <a href="#"> Контакты</a>
                    </li>
                </ul>
                <div className={styles.button}>
                <button>Регистрация</button>
                <button>Войти</button>
            </div>
            </nav>
           

    )
}

export default Header