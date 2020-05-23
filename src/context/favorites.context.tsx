import React, {createContext, Children, useState, useContext} from 'react';
import {INotice} from '../typescript/interfaces';

interface FavoriteContext {
  isLoading: boolean;
  getNoticies: Function;
  favoritesNotices: [INotice?];
}

const FavoriteContext = createContext<FavoriteContext>({} as FavoriteContext);

export const FavoriteProvider: React.FC = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [favoritesNotices, setFavoritesNotices] = useState<[INotice?]>([]);

  async function getNoticies() {}

  return (
    <FavoriteContext.Provider
      value={{isLoading, favoritesNotices, getNoticies}}>
      {children}
    </FavoriteContext.Provider>
  );
};

export function useNotice() {
  const context = useContext(FavoriteContext);

  return context;
}
