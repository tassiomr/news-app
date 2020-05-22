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
  backgroundColor: Palette.midnightGreen,
  titleColor: Palette.liverOrgan,
  linkColor: Palette.pineGreen,
  paragraphColor: Palette.dutchWhite,
};

export default {darkTheme, lightTheme};
