import { narutocharacter } from './animeСharacter/narutocharacter';
import { norogamicharacter } from './animeСharacter/norogamicharacter';
import { tokyoghoulcharacter } from './animeСharacter/tokyoghoulcharacter';

export const characterlist = norogamicharacter.concat(
  narutocharacter,
  tokyoghoulcharacter
);
