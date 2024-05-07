import cls from "./nAlert.module.css"
import cross from "../../assets/cross.png"
import { removeAlert } from "../../store/slices/alertSlice"
import { useDispatch } from "react-redux"
import not from "../../assets/notes.png"
import mus from "../../assets/musor.png"

const NotesAlert = () => {
    const dispatch = useDispatch()
    const handleClick = (redirectToCheckout) => {
      if (redirectToCheckout) {
        dispatch(removeAlert())
      } else {
        dispatch(removeAlert())
      }
    };
  return (
    <div className={cls.overlay}>
      <div className={cls.alert}>
        <div className={cls.name}>
        <h3 className={cls.h3text}>Закладки</h3>
        <img className={cls.cros} src={cross} alt="" onClick={handleClick} />
        </div>
        <div className={cls.div}>
          <img className={cls.note}  src={not} alt="" />
          <div className={cls.text}>
          <h4 className={cls.h4text}>Закладка</h4>
          <p className={cls.textp}>00:00:07 - undefined</p>
          </div>
          <img className={cls.musor} src={mus} alt="" />
        </div>
        <div className={cls.div}>
          <img className={cls.note} src={not} alt="" />
          <div className={cls.text}>
          <h4 className={cls.h4text}>Закладка</h4>
          <h5 className={cls.textp}>00:00:07 - undefined</h5>
          </div>
          <img className={cls.musor} src={mus} alt="" />
          </div>
      </div>
    </div>
  )
}

export default NotesAlert