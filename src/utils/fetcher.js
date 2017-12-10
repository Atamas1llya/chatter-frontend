import { apiHost } from '../../config'; // FIXME: ...

const Fetcher = async (url, params) => {
  let json;

  try {
    const res = await fetch(`${apiHost}/${url}`, params);

    if (!res.ok) throw new Error(res.statusText);

    json = await res.json();
  } catch (err) {
    console.error(err);
    throw err; // ???
  }

  return json;
}

export default Fetcher;
