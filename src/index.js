// const fetch = require("node-fetch");
// import '../node_modules/cross-fetch/polyfill';

// console.log("hello world")
async function getMeme(memeType, Top, BottomText) {
  const path = `http://apimeme.com/meme?meme=${memeType}&top=${Top}&bottom=${BottomText}`
  // http://apimeme.com/meme?meme=10-Guy&top=Top+text&bottom=Bottom+text
  try {
    const res = await fetch(path, {mode:"no-cors"})
    console.log("getMeme--->", res)
    const json = await res.text()
    console.log("json--->", json)
    return json
  } catch(err) {
    console.log("Error", err)
    return err
  }

  
  
}
export default getMeme

// getMeme('10-Guy', 'Top+text', 'Bottom+text')