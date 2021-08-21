const chalk = require('chalk');
const getActor = require('./get-actor-movie-list');

async function compareActors(ActorA, ActorB) {
  const Actor1 = await getActor(ActorA);
  const Actor2 = await getActor(ActorB);

  //we could use a turnary expression, but those are kind of unreadable at a glance.
  if (Actor1.length > Actor2.length) {
    return ActorA;
  } else {
    return ActorB;
  }
}

module.exports = compareActors;
