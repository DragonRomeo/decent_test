import { createContext, useContext } from 'react';
import { IContext } from '../interface/iContext';

export const DataContext = createContext<IContext | null>(null);
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('Context is not provided.');
  }
  return context;
};
