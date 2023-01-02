const axios = require('axios');

// linktr.ee/tenjinmiko
//    ________  ________  ________  ____  ___  _  ________ 
//   ╱╱       ╲╱    ╱   ╲╱        ╲╱    ╲╱  ╱_╱ ╲╱   _    ╲
//  ╱╱    ____╱    ╱    ╱         _╱  ╱ ╱      _╱   / /   ╱
// ╱        _╱         ╱         ╱   ╱ ╱      _╱   /_/   ╱ 
// ╲_______╱ ╲________╱╲__╱__╱__╱╲____╱╲___╱\_╱\________╱  

async function twitterScrape(userInput) {

  try {

    if (!userInput.match(new RegExp(/(twitter).(com)/,'ig'))) {
      throw new Error('url_err');
    }
    const url = `https://twdown.app/api/twitter?url=${userInput}`
    const result = await axios.get(url);

    const media = result.data.data

    media.totalMedia = media.videos.length
    console.log(media);
    
  } catch (error) {
    console.error(error);
  }
}

twitterScrape("https://twitter.com/TweetsOfCats/status/1547778899534172160")
