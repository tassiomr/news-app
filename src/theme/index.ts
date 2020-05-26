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
  settingsInfo: {background: Palette; text: Palette};
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
  settingsInfo: {
    background: Palette.midnightGreen,
    text: Palette.cultured,
  },
};

const dark: Theme = {
  backgroundColor: Palette.midnightGreen,
  titleColor: Palette.cultured,
  linkColor: Palette.cultured,
  paragraphColor: Palette.dutchWhite,
  activeIcon: Palette.cultured,
  inactiveIcon: Palette.pineGreen,
  button: {
    selected: Palette.midnightGreen,
    deselected: Palette.cultured,
    textDeselected: Palette.midnightGreen,
    textSelected: Palette.cultured,
  },
  settingsInfo: {
    background: Palette.pineGreen,
    text: Palette.dutchWhite,
  },
};

export default {dark, light};
