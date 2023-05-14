import { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  function handleRegistration(e) {
    e.preventDefault();

    props.onRegister(formValue);
  }
  return (
    <div className="form__auth-container">
      <p className="form__title">Регистрация</p>
      <form
        className="form form__auth"
        name="registration_form"
        onSubmit={handleRegistration}
      >
        <div className="form__input-block">
          <input
            className="form__auth-input form__input_el_email_login"
            type="email"
            id="email-input"
            name="email"
            placeholder="Email"
            minLength="2"
            maxLength="40"
            value={formValue.email}
            onChange={handleChange}
            required
          />
          <span className="form__input-error email-input-error"></span>
        </div>
        <div className="form__input-block">
          <input
            className="form__auth-input form__input_el_password"
            type="password"
            id="password-input"
            name="password"
            placeholder="Пароль"
            minLength="2"
            maxLength="40"
            value={formValue.password}
            onChange={handleChange}
            required
          />
          <span className="form__input-error password-input-error"></span>
        </div>
        <button className="form__logIn-button" type="submit">
          Зарегестрироваться
        </button>
        <div className="form__subtitle">
          <Link to="/signin" className="form__subtitle form__subtitle_link">
            Уже зарегистрированы? Войти
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
