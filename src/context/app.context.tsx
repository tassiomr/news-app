import React, {createContext, useState, useContext, useEffect} from 'react';
import {INotice} from '../typescript/interfaces';
import {NoticeType} from '../typescript/enums';
import noticesService from '../services/notices.service';
import theme, {Theme} from '../../src/theme';
import themeService from '../../src/services/theme.service';
import {useColorScheme} from 'react-native';

type notices = {
  type: NoticeType;
  data: [INotice?];
};
interface AppContext {
  getNoticies: Function;
  notices: notices;
  changePage: Function;
  changeColorSchema: Function;
  copyright: string;
  theme: Theme;
  isLoading: boolean;
}

const AppContext = createContext<AppContext>({} as AppContext);

export const AppProvider: React.FC = ({children}) => {
  const colorSchema = useColorScheme();

  const [isLoading, setIsLoading] = useState(true);
  const [themeSchema, setTheme] = useState<Theme | null>(theme.light);
  const [technology, setTechnology] = useState<[INotice?]>([]);
  const [science, setScience] = useState<[INotice?]>([]);
  const [copyright, setCopyright] = useState<string>('');
  const [notices, setNotices] = useState<{type: NoticeType; data: [INotice?]}>({
    type: NoticeType.technology,
    data: [],
  });

  useEffect(() => {
    themeService.getApplicationTheme().then((theme) => {
      if (!theme) {
        setTheme(null);
      } else {
        setTheme(theme);
      }
    });
  }, []);

  async function getNoticies() {
    if (!notices.data.length) {
      setIsLoading(true);
      const responseTechnology = await noticesService.getTechnologyNotices();
      const responseScience = await noticesService.getScienceNotices();

      setNotices({
        type: NoticeType.technology,
        data: responseTechnology.data as [INotice],
      });

      setTechnology(responseTechnology.data as [INotice]);
      setScience(responseScience.data as [INotice]);
      setCopyright(responseScience.copyright || responseTechnology.copyright);

      setIsLoading(false);
    }
  }

  function changePage(noticeType: NoticeType) {
    noticeType === NoticeType.technology
      ? setNotices({type: NoticeType.technology, data: technology})
      : setNotices({type: NoticeType.science, data: science});
  }

  function changeColorSchema(schema: 'light' | 'dark') {
    setTheme(theme[schema]);
  }

  return (
    <AppContext.Provider
      value={{
        notices,
        getNoticies,
        changePage,
        copyright,
        theme: themeSchema || theme[colorSchema || 'light'],
        changeColorSchema,
        isLoading,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
