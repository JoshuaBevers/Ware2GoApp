const getActorID = require('./query/actor-id-query');
const getActorMovie = require('./query/actor-movie-query');

async function getActorMovieList(actorName) {
  const splitname = actorName.split(' ');
  const actorID = await getActorID(splitname[0], splitname[1]);
  const result = await getActorMovie(actorID);
  return result;
}

module.exports = getActorMovieList;
