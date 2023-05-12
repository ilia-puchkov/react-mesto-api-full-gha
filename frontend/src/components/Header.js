import { useLocation, Link, Route, Routes } from "react-router-dom";
import headerLogo from "../image/logo.svg";

function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип - Место" />
      <Routes>
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__link">
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
                to="/sign-in"
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
