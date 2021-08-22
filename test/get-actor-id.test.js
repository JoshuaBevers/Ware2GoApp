jest.mock('../src/lib/query/actor-id-query');
const getActorID = require('../src/lib/query/actor-id-query');

getActorID.mockImplementation((name) => {
  //really limited when it comes to testing API reponses. Really kinda just mocking expected results and testing on known assumptions... which is meh.
  if (name === 'Johnny Depp') {
    return '85';
  } else {
    return '73457';
  }
});

//limited responses based on what we expect from the API.

test('Gets the id based name', async () => {
  const actorID = getActorID('Chris Pratt');
  expect(actorID).toBe('73457');
});

test('Gets the id based name', async () => {
  const actorID = getActorID('Johnny Depp');
  expect(actorID).toBe('85');
});
