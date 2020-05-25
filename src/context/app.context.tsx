import React, {
  createContext,
  Children,
  useState,
  useContext,
  useEffect,
} from 'react';
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
}

const AppContext = createContext<AppContext>({} as AppContext);

export const AppProvider: React.FC = ({children}) => {
  const colorSchema = useColorScheme();
  const [notices, setNotices] = useState<{type: NoticeType; data: [INotice?]}>({
    type: NoticeType.technology,
    data: [],
  });

  const [themeSchema, setTheme] = useState<Theme | null>(theme.light);

  useEffect(() => {
    themeService.getApplicationTheme().then((theme) => {
      if (!theme) {
        setTheme(null);
      } else {
        setTheme(theme);
      }
    });
  }, []);

  const [technology, setTechnology] = useState<[INotice?]>([]);
  const [science, setScience] = useState<[INotice?]>([]);
  const [copyright, setCopyright] = useState<string>('');

  async function getNoticies() {
    if (!notices.data.length) {
      noticesService.getTechnologyNotices().then((response: any) => {
        setTechnology(response.data);
        setCopyright(response.copyright);
        setNotices({...notices, data: response.data});

        noticesService.getScienceNotices().then((e: any) => {
          setScience(response.data);
        });
      });
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
      }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
