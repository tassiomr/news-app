import React, {createContext, Children, useState, useContext} from 'react';
import {INotice} from '../typescript/interfaces';
import noticesService from '../../src/services/notices.service';

interface NotificeContext {
  isLoading: boolean;
  getNoticies: Function;
  notices: [INotice?];
}

const NoticeContext = createContext<NotificeContext>({} as NotificeContext);

export const NoticeProvider: React.FC = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notices, setNotices] = useState<[INotice?]>([]);

  async function getNoticies() {
    if (!notices.length) {
      noticesService.getScienceNotices().then((e: any) => {
        setNotices(e);
      });
    }
  }

  return (
    <NoticeContext.Provider value={{isLoading, notices, getNoticies}}>
      {children}
    </NoticeContext.Provider>
  );
};

export function useNotice() {
  const context = useContext(NoticeContext);
  return context;
}
