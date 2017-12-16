import Fetcher from './fetcher';

const apiGet = async (url, token = 0) => {
  return await Fetcher(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  });
};

const apiPost = async (url, body, token = 0) => {
  return await Fetcher(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(body),
  });
};

const apiPut = async (url, body, token = 0) => {
  return await Fetcher(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(body),
  });
};

const apiDelete = async (url, token = 0) => {
  return await Fetcher(url, {
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
