import cls from './Header.module.css'
import auditoria from '../../src/assets/auditoria.svg'

// const menu = ["Как купить", "F.A.Q", "Контакты"]
const Header = () => {
    return <header className="container">   
        {/* АУДИТОРИЯ */}
        <img className={cls.logo} src={auditoria} alt="logo" />
        <nav>
            <ul className={cls.navlinks}>
                <li><a href='#'>Как купить</a></li>
                <li><a href='#'>F.A.Q</a></li>
                <li><a href='#'>Контакты</a></li>
            </ul>
        </nav>

        <a className='cta' href='a'><button>Регистрация</button></a>
        <a className='cta' href='a'><button>Войти</button></a>
    </header>


}

export default Header