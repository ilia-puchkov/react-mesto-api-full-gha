import {useEffect, useRef} from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = '';
  }, [!props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm name="avatar-change" title="Обновить аватар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <div className="form__input-block">
        <input className="form__input form__input_el_avatar" type="url" id="avatar-link-input" name="avatar" placeholder="Ссылка на аватар" ref={avatarRef} required />
        <span className="form__input-error avatar-link-input-error"></span>
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;