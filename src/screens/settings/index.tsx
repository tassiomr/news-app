import React, {useState, useEffect} from 'react';
import {Screen, Text} from '../../components';
import {CopyRight, Wrapper, Button, Toogle, WrapperControllers} from './styles';
import {useAppContext} from '../../context/app.context';
import {appVersion} from '../../../app.json';
import {useColorScheme} from 'react-native';
import {saveItem, Keys, deleteItem} from '../../../src/configs/storage';
import themeService from '../../../src/services/theme.service';

export const Settings: React.FC = () => {
  const {copyright, changeColorSchema} = useAppContext();

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [systemDarkMode, setSystemDarkMode] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const colorSchema = useColorScheme();

  function handleSchema() {
    if (systemDarkMode) {
      console.log(colorSchema);
      changeColorSchema(colorSchema || 'light');
      saveItem(Keys.SYSTEM_DARK_MODE, JSON.stringify(systemDarkMode));
    } else {
      deleteItem(Keys.SYSTEM_DARK_MODE);
      if (darkMode) {
        changeColorSchema('dark');
        saveItem(Keys.DARK_MODE, JSON.stringify(darkMode));
      } else {
        changeColorSchema('light');
        deleteItem(Keys.DARK_MODE);
      }
    }
  }

  async function bindingValues() {
    setDarkMode((await themeService.bindingValues()).darkMode);
    setSystemDarkMode((await themeService.bindingValues()).systemTheme);
  }

  useEffect(() => {
    bindingValues();
  }, []);

  useEffect(() => {
    if (!firstLoad) {
      handleSchema();
    }

    setFirstLoad(false);
  }, [systemDarkMode, darkMode]);

  useEffect(() => {
    if (systemDarkMode) {
      changeColorSchema(colorSchema || 'light');
      saveItem(Keys.SYSTEM_DARK_MODE, JSON.stringify(systemDarkMode));
    }
  }, [colorSchema]);

  return (
    <Screen>
      <Wrapper>
        <WrapperControllers>
          <Text.Title text="Settings" />
          <Button disabled={systemDarkMode}>
            <Text.Paragraph text="Dark Mode" />
            <Toogle
              value={darkMode && !systemDarkMode}
              disabled={systemDarkMode}
              onValueChange={(value: boolean) => setDarkMode(value)}
            />
          </Button>
          <Button>
            <Text.Paragraph text="System Mode" />
            <Toogle
              value={systemDarkMode}
              onValueChange={(value: boolean) => setSystemDarkMode(value)}
            />
          </Button>
          <Text.Title text="App Info" />
          <CopyRight>{copyright}</CopyRight>
          <CopyRight>App Version: {appVersion}</CopyRight>
          <CopyRight>Created by Tássio Marcos</CopyRight>
        </WrapperControllers>
      </Wrapper>
    </Screen>
  );
};
