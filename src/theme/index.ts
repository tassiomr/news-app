import Palette from './pallete';

export interface Theme {
  backgroundColor: Palette;
  titleColor: Palette;
  linkColor: Palette;
  paragraphColor: Palette;
  activeIcon: Palette;
  inactiveIcon: Palette;
  button: {
    selected: Palette;
    deselected: Palette;
    textSelected: Palette;
    textDeselected: Palette;
  };
}

const light: Theme = {
  backgroundColor: Palette.cultured,
  titleColor: Palette.liverOrgan,
  linkColor: Palette.midnightGreen,
  paragraphColor: Palette.pineGreen,
  activeIcon: Palette.liverOrgan,
  inactiveIcon: Palette.grey,
  button: {
    selected: Palette.liverOrgan,
    deselected: Palette.cultured,
    textSelected: Palette.cultured,
    textDeselected: Palette.liverOrgan,
  },
};

const dark: Theme = {
  backgroundColor: Palette.midnightGreen,
  titleColor: Palette.cultured,
  linkColor: Palette.pineGreen,
  paragraphColor: Palette.dutchWhite,
  activeIcon: Palette.cultured,
  inactiveIcon: Palette.pineGreen,
  button: {
    selected: Palette.cultured,
    deselected: Palette.liverOrgan,
    textDeselected: Palette.cultured,
    textSelected: Palette.liverOrgan,
  },
};

export default {dark, light};
