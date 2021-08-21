const fetch = require('node-fetch');
const chalk = require('chalk');

async function getActorID(firstname, lastname) {
  const url2 = `https://api.themoviedb.org/3/search/person?api_key=${process.env.TMDB_KEY}&language=en-US&query=${firstname}%20${lastname}`;

  try {
    const response = await fetch(url2, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    // console.log(chalk.red('return is: ', response));
    const actorID = responseData.results[0].id;
    return actorID;
  } catch (e) {
    console.log('failed the fetch for actor id.', e);
  }
}

module.exports = getActorID;
