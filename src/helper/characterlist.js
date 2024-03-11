import { narutocharacter } from './animeСharacter/narutocharacter';
import { norogamicharacter } from './animeСharacter/norogamicharacter';
import { tokyoghoulcharacter } from './animeСharacter/tokyoghoulcharacter';

let combineArrays = (...arrays) => {
  let combinedArray = [];
  let idCounter = 0;
  arrays.forEach((array) => {
    array.forEach((item) => {
      const newItem = {
        ...item,
        id: idCounter++,
      };
      combinedArray.push(newItem);
    });
  });
  return combinedArray;
};

export const characterlist = combineArrays(
  norogamicharacter,
  narutocharacter,
  tokyoghoulcharacter
);
