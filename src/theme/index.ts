import Palette from './pallete';

export interface Theme {
  backgroundColor: Palette;
  titleColor: Palette;
  linkColor: Palette;
  paragraphColor: Palette;
}

const lightTheme: Theme = {
  backgroundColor: Palette.cultured,
  titleColor: Palette.liverOrgan,
  linkColor: Palette.midnightGreen,
  paragraphColor: Palette.pineGreen,
};

const darkTheme: Theme = {
  backgroundColor: Palette.cultured,
  titleColor: Palette.liverOrgan,
  linkColor: Palette.midnightGreen,
  paragraphColor: Palette.pineGreen,
};

export default {darkTheme, lightTheme};
