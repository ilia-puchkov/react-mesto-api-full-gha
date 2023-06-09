class Authorization {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  // Проверка
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`У нас ошибка ${res.status}`);
  }

  // Регистрация
  register(data) {
    return fetch(this._url + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    }).then(this._checkResponse);
  }

  // Авторизация
  login(data) {
    return fetch(this._url + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    }).then(this._checkResponse);
  }

  // Проверка токена
  checkToken(jwt) {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkResponse);
  }
}

const auth = new Authorization({
  baseUrl: "https://api.rerasmesto.students.nomoredomains.monster",
});

export default auth;
