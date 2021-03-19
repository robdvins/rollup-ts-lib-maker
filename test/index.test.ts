import { about } from '../src/';

describe('A message for you', () => {
  it('it should inspire you', () => {
    expect(about()).toBe('Start creating your library for a better world.');
  });
});
