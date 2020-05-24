import React, {createContext, Children, useState, useContext} from 'react';
import {INotice} from '../typescript/interfaces';
import {NoticeType} from '../typescript/enums';
import noticesService from '../../src/services/notices.service';

type notices = {
  type: NoticeType;
  data: [INotice?];
};
interface NotificeContext {
  isLoading: boolean;
  getNoticies: Function;
  notices: notices;
  changePage: Function;
}

const NoticeContext = createContext<NotificeContext>({} as NotificeContext);

export const NoticeProvider: React.FC = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [notices, setNotices] = useState<{type: NoticeType; data: [INotice?]}>({
    type: NoticeType.science,
    data: [],
  });

  const [technology, setTechnology] = useState<[INotice?]>([]);
  const [science, setScience] = useState<[INotice?]>([]);

  async function getNoticies() {
    if (!notices.data.length) {
      noticesService.getScienceNotices().then((e: any) => {
        setScience(e);
        setNotices({...notices, data: e});
        noticesService.getTechnologyNotices().then((e: any) => {
          setTechnology(e);
        });
      });
    }
  }

  function changePage(noticeType: NoticeType) {
    if (noticeType === NoticeType.science) {
      setNotices({type: noticeType, data: science});
    } else {
      setNotices({type: noticeType, data: technology});
    }
  }

  return (
    <NoticeContext.Provider
      value={{isLoading, notices, getNoticies, changePage}}>
      {children}
    </NoticeContext.Provider>
  );
};

export function useNotice() {
  const context = useContext(NoticeContext);
  return context;
}
