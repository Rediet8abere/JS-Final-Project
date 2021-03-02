import config from '../config.js';

async function getMeme(query) {
  const path = `https://api.tenor.com/v1/search?q=${query}&key=${config.SECRET_API_KEY}&limit=12`
  try {
    const res = await fetch(path)
    const json = await res.text()
    return json
  } catch(err) {
    console.log("Error", err)
    return err
  }
}
export default getMeme