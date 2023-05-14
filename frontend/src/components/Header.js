import { useLocation, Link, Route, Routes } from "react-router-dom";
import headerLogo from "../image/logo.svg";

function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип - Место" />
      <Routes>
        <Route
          path="/signup"
          element={
            <Link to="/signin" className="header__link">
              Войти
            </Link>
          }
        />
        <Route
          path="/signin"
          element={
            <Link to="/signup" className="header__link">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/"
          element={
            <div className="header__menu">
              <span className="header__email">{props.email}</span>
              <Link
                className="header__link"
                to="/signin"
                onClick={props.onLogout}
              >
                Выйти
              </Link>
            </div>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
