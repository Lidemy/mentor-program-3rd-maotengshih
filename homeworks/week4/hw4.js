const request = require('request');

request.get(
  {
    url: 'https://api.twitch.tv/helix/games/top/',
    headers: {
      'Client-ID': 'edgwmh3r5g3g38akuan022ce9udged',
    },
  },
  (error, response, body) => {
    const topList = JSON.parse(body).data;
    for (let i = 0; i < topList.length; i += 1) {
      console.log(`${topList[i].id} ${topList[i].name}`);
    }
  },
);
