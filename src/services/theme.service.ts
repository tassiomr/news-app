import theme from '../../src/theme';
import {Keys, getItem} from '../../src/configs/storage';

async function getApplicationTheme() {
  const systemTheme = await getItem(Keys.SYSTEM_DARK_MODE);

  if (systemTheme) {
    return null;
  } else {
    const darkMode = await getItem(Keys.DARK_MODE);
    if (darkMode) {
      return theme.dark;
    }

    return theme.light;
  }
}

async function bindingValues(): Promise<{
  darkMode: boolean;
  systemTheme: boolean;
}> {
  const systemTheme = await getItem(Keys.SYSTEM_DARK_MODE);

  let darkMode = null;

  if (!systemTheme) {
    darkMode = await getItem(Keys.DARK_MODE);
  }

  return {
    darkMode: darkMode ? !!darkMode : false,
    systemTheme: systemTheme ? !!systemTheme : false,
  };
}

export default {
  getApplicationTheme,
  bindingValues,
};
