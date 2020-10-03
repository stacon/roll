import { getNumberBetweenMinAndMax } from '../libs/getNumberBetweenMinAndMax';

describe('getNumberBetweenMinAndMax tests, ', () => {
  it('return a number within the range', () => {
    const randomNumber = getNumberBetweenMinAndMax(1, 3);
    const validResult = randomNumber >= 1 && randomNumber <= 3;
    expect(validResult).toBeTruthy();
  });
});