// packages
require('dotenv').config();
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

//functions
const getMovieActorList = require('./lib/get-actor-movie-list');
const compareActors = require('./lib/compare-actors');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Ware2Go Movie API', {
      horizontalLayout: 'full',
    }),
  ),
);
console.log(
  chalk.cyan(
    figlet.textSync('Applicant: Joshua Bevers', {
      horizontalLayout: 'full',
    }),
  ),
);

const run = async () => {
  const ChrisPrattList = await getMovieActorList('Chris Pratt');
  console.log(chalk.green('Chris Pratts list is: \n'));
  console.log(chalk.cyanBright(ChrisPrattList));
  const MovieNumWinner = await compareActors('Chris Pratt', 'Johnny Depp');
  console.log(chalk.red(MovieNumWinner, 'has the most movies!'));
};

run();
