import cls from './Order.module.css'
import email from '../../assets/email.svg'
import harry from '../../assets/harry.svg'

const Order = () => {
  return (
    <div className={'container'}>
      <div className={cls.order}>
        <div className={cls.left}>
          <img src={harry} alt=""/>
          <h1>Гарри Поттер и Орден <br/> Феникса</h1>
          <p>Автор: Маргарет Митчелл, Сандр Бондрос <br/>
            Читает: Алексей Сквозной</p>
          <h6 style={{
            marginTop: '180px',
            position: "absolute",
            color: 'white',
            marginLeft: '245px',
            fontFamily: 'Ubuntu',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '20.68px',
            textAlign: 'center',

          }}>Сумма к оплате:
            387 руб.</h6>
        </div>
        <div className={cls.glav}>
          <div className={cls.right}>
          <img style={{
            position: "absolute",
            top: '62px',
            left: '50px',

          }} src={email} alt=""/>
          <p>Введите адрес электронной <br/>
            почты для отправки чека о покупке</p>
          <input type="text" placeholder="     3dteapot@gmail.com"/>
          <button >Смотреть все</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;