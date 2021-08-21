const fetch = require('node-fetch');

async function getActorMoviesNum(id) {
  const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.TMDB_KEY}`;
  const test = `https://api.themoviedb.org/3/person/73457/tv_credits?api_key=a88a767ff8036cdba8f0fb5637296737&language=en-US`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    const actorList = responseData.cast.map((object) => {
      return object.title;
    });
    return actorList;
  } catch (e) {
    console.log('failed the fetch for actor id.', e);
  }
}

module.exports = getActorMoviesNum;
