import Fetcher from './fetcher';

const apiGet = (url, token = 0) => {
  return Fetcher(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  });
};

const apiPost = (url, body, token = 0) => {
  return Fetcher(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(body),
  });
};

const apiPut = (url, body, token = 0) => {
  return Fetcher(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(body),
  });
};

const apiDelete = (url, token = 0) => {
  return Fetcher(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  });
};

module.exports = {
  get: apiGet,
  post: apiPost,
  put: apiPut,
  delete: apiDelete,
};
