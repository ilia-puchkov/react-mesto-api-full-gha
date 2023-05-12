import {useContext} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  
  const isOwn = props.card.owner._id === currentUser._id;

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = ( 
    `element__like ${isLiked && 'element__like-active'}` 
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="element">
      {isOwn && <button className='element__delete buttons element__delete-visible' type="button" onClick={handleDeleteClick} />} 
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="element__bottom">
        <p className="element__name">{props.card.name}</p>
        <div className="element__likes">
        <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick} ></button>
          <p className="element__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>);
}

export default Card;