function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <h2 className="popup__header">{props.title}</h2>
          <form className="form popup__form" name={props.name} onSubmit={props.onSubmit}>
            {props.children}
            <button className="form__save-button" type="submit">{props.buttonText}</button>
          </form>
          <button className="buttons popup__close-button" type="button" onClick={props.onClose}></button>
        </div>
    </div>
  )
}
export default PopupWithForm;