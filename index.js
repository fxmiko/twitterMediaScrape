const axios = require('axios');

async function getPage(url) {
  try {
    const result = await axios.get(url);

    result.data.data.totalMedia = result.data.data.videos.length
    console.log(result.data.data);
    // console.log(video);
  } catch (error) {
    console.error(error);
  }
}


getPage('https://twdown.app/api/twitter?url=https://twitter.com/TweetsOfCats/status/1547778899534172160');
