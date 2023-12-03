// ContextProvider.js
import React, { useState, createContext } from 'react';
import axios from 'axios';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  
  return (
    <Context.Provider value={{ search, setSearch}}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
