import React, { createContext, useState } from 'react';

export const BizListContext = createContext();

const initialVal = [];

//Custom Hook to make list of businesses accesible anywhere in the app
export function BizListProvider(props) {
  const [biz, setBiz] = useState(initialVal);

  const getBiz = val => {
    return setBiz(val);
  };

  return (
    <BizListContext.Provider value={{ biz, getBiz }}>
      {props.children}
    </BizListContext.Provider>
  );
}
