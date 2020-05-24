import React, {createContext, Children, useState, useContext} from 'react';
import {INotice} from '../typescript/interfaces';
import {NoticeType} from '../typescript/enums';
import noticesService from '../../src/services/notices.service';

type notices = {
  type: NoticeType;
  data: [INotice?];
};
interface NotificeContext {
  getNoticies: Function;
  notices: notices;
  changePage: (...params: any) => any;
}

const NoticeContext = createContext<NotificeContext>({} as NotificeContext);

export const NoticeProvider: React.FC = ({children}) => {
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

  function changePage() {
    notices.type === NoticeType.science
      ? setNotices({type: NoticeType.technology, data: technology})
      : setNotices({type: NoticeType.science, data: science});
  }

  return (
    <NoticeContext.Provider value={{notices, getNoticies, changePage}}>
      {children}
    </NoticeContext.Provider>
  );
};

export function useNotice() {
  const context = useContext(NoticeContext);
  return context;
}
