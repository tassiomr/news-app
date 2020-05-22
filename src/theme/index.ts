import Palette from './pallete';

export interface Theme {
  backgroundColor: Palette;
  titleColor: Palette;
  linkColor: Palette;
  paragraphColor: Palette;
  activeIcon: Palette;
  inactiveIcon: Palette;
}

const light: Theme = {
  backgroundColor: Palette.cultured,
  titleColor: Palette.liverOrgan,
  linkColor: Palette.midnightGreen,
  paragraphColor: Palette.pineGreen,
  activeIcon: Palette.liverOrgan,
  inactiveIcon: Palette.grey,
};

const dark: Theme = {
  backgroundColor: Palette.midnightGreen,
  titleColor: Palette.liverOrgan,
  linkColor: Palette.pineGreen,
  paragraphColor: Palette.dutchWhite,
  activeIcon: Palette.cultured,
  inactiveIcon: Palette.pineGreen,
};

export default {dark, light};
