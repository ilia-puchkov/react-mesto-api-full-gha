function InfoTooltip(props) {
  return (
    <div
      className={`popup popup__infoTool ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__infotool-body">
        <div className="popup__info-container">
          <div
            className={`${
              props.isSuccess
                ? "popup__tooltip-image popup__tooltip-image-ok"
                : "popup__tooltip-image"
            }`}
            >
          </div>
          <p className="popup__tooltip-signature">
            {props.isSuccess
              ? "Вы успешно зарегистрировались!"
              : "Что-то пошло не так! Попробуйте ещё раз."}
          </p>
        </div>
        <button
          className="buttons popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
