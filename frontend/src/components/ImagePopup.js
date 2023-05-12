function ImagePopup(props) {
  return (
    <div className={`popup popup_type_full-image ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__image-container">
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <p className="popup__signature">{props.card.name}</p>
        <button className="buttons popup__close-button" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;