import {useContext} from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user">
          <div className="profile__avatar-block">
            <button className="profile__avatar-edit buttons" type="button" aria-label="Edit user avatar" onClick={props.onEditAvatar}></button>
            <img className="profile__avatar" src={currentUser.avatar} alt="аватар" />
          </div>
          <div className="profile__block">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button buttons" type="button" aria-label="Edit user info" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__occupation">{currentUser.about}</p>
          <button className="profile__add-button buttons" type="button" aria-label="Add new card" onClick={props.onAddPlace}></button>
        </div>
      </section>

      <section className="elements">
        <ul className="elements__grid">
          {props.cards.map(card => {
            return <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
          })}
        </ul>
      </section>
      </main>
  )
}

export default Main;