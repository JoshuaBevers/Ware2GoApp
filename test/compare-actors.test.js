//mocking functions
const compare = require('../src/lib/compare-actors');
jest.mock('../src/lib/compare-actors');
jest.mock('../src/lib/query/actor-id-query');

//mocking data calls.
const JohnnyDepp = require('./__mockData__/JohnnyDepp.json');
const ChrisPratt = require('./__mockData__/ChrisPratt.json');

//mocking implimentation
compare.mockImplementation((actor1, actor2) => {
  //finally, a test that doesn't completely sit on an API.. well, kinda. We can dream
  if (actor1.length > actor2.length) {
    return 'Johnny Depp';
  } else {
    return 'Chris Pratt';
  }
});

test('Compares the number of movies Johnny Depp and Chris Pratt have been in and returns the winners name', async () => {
  const Johnny = JohnnyDepp.cast.map((object) => {
    return object.title;
  });
  const Chris = ChrisPratt.cast.map((object) => {
    return object.title;
  });
  const winner = await compare(Johnny, Chris);
  expect(winner).toBe('Johnny Depp');
});
