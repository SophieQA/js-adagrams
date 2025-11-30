
const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

export const drawLetters = () => {
  // Implement this method for wave 1
  const getDrawnPool = () => {
    const drawnPool = [];
    for (let[letter, num] of Object.entries(LETTER_POOL)) {
      while (num > 0) {
        drawnPool.push(letter);
        num -= 1;
      }
    }
    return drawnPool;
  };

  const drawnPool = getDrawnPool();
  const getLetters = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * drawnPool.length);
    getLetters.push(drawnPool[randomIndex]);
    drawnPool.splice(randomIndex, 1);
  }
  return getLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const handCopy = [...lettersInHand];
  for (let char of input) {
    if (handCopy.includes(char)) {
      const index = handCopy.indexOf(char);
      handCopy.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
