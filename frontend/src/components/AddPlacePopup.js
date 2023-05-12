import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  // Переменные
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  //Очистка полей
  useEffect(() => {
    setName('');
    setLink('');
  }, [!props.isOpen]);

  // Обработчики инпутов
  // Имя
  function handleChangeName(e) {
    setName(e.target.value);
  }

  // Ссылка
  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  // Сабмит
  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name,
      link
    });
  }

  return(
    <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
    <div className="form__input-block">
      <input className="form__input form__input_el_place" type="text" id="place-input" name="name" placeholder="Название" minLength="2" maxLength="30" value={name || ''} onChange={handleChangeName} required />
      <span className="form__input-error place-input-error"></span>
    </div>
    <div className="form__input-block">
      <input className="form__input form__input_el_place-link" type="url" id="place-link-input" name="link" placeholder="Ссылка на картинку" value={link || ''} onChange={handleChangeLink} required />
      <span className="form__input-error place-link-input-error"></span>
    </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup;