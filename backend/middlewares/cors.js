const allowedCors = [
  'http://rerasmesto.students.nomoredomains.monster/',
  'https://rerasmesto.students.nomoredomains.monster/',
  'https://api.rerasmesto.students.nomoredomains.monster/sign-in',
  'https://api.rerasmesto.students.nomoredomains.monster/sign-in',
  'http://localhost:3000',
  'https://localhost:3000',
];

const cors = (req, res, next) => {
  const { method } = req;
  const { origin } = req.headers;

  const requestHeaders = req.headers['access-control-request-headers'];
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  return next();
};

module.exports = { cors };