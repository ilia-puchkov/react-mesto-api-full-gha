import { useState } from "react";

function Login(props) {
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

  function handleLogin(e) {
    e.preventDefault();

    props.onLogin(formValue);
  }

  return (
    <div className="form__auth-container">
      <p className="form__title">Вход</p>
      <form
        className="form form__auth"
        name="login_form"
        onSubmit={handleLogin}
      >
        <div className="form__input-block">
          <input
            className="form__auth-input form__input_el_name_login"
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
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
