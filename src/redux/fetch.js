import fetch from 'cross-fetch';

export default async function callFetch(url) {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Bad response from server");
    }
    return await response.json();
  } catch(err) {
    throw new Error(err);
  }
}