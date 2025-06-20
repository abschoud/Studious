// Create a context to store the header title
import React, { createContext, useState, useContext } from 'react';

const HeaderTitleContext = createContext('weytw');

export const HeaderTitleProvider = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState('test'); // Initial title

  return (
    <HeaderTitleContext.Provider value={{ headerTitle, setHeaderTitle }}>
      {children}
    </HeaderTitleContext.Provider>
  );
};

export const useHeaderTitle = () => {
  return useContext(HeaderTitleContext);
};