import {useEffect, useState, useContext} from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
  // Контекст
  const currentUser = useContext(CurrentUserContext);

  // Переменные
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');

  //Значение по умолчанию
  useEffect(() => {
    setName(currentUser.name);
    setOccupation(currentUser.about);
  }, [currentUser, props.isOpen]);

  // Обработчики инпутов
  // Имя
  function handleChangeName(e) {
    setName(e.target.value);
  }

  // Описание
  function handleChangeOccupation(e) {
    setOccupation(e.target.value);
  }

  // Сабмит
  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      occupation
    });
  }

  return (
  <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
        <div className="form__input-block">
          <input className="form__input form__input_el_name" type="text" id="name-input" name="name" placeholder="Имя" minLength="2" maxLength="40" value={name || ''} onChange={handleChangeName} required />
          <span className="form__input-error name-input-error"></span>
        </div>
        <div className="form__input-block">
          <input className="form__input form__input_el_occupation" type="text" id="occupation-input" name="occupation" placeholder="О себе" minLength="2" maxLength="200" value={occupation || ''} onChange={handleChangeOccupation} required />
          <span className="form__input-error occupation-input-error"></span>
        </div>
  </PopupWithForm>)
}

export default EditProfilePopup;