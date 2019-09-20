import React, { createContext, useState } from 'react';

export const SelectedBizContext = createContext();

//Custom Hook to find Location
export function SelectedBizProvider(props) {
  const [selectedBiz, setBiz] = useState({});

  const changeBiz = newVal => {
    setBiz(newVal);
    console.log(selectedBiz);
  };

  return (
    <SelectedBizContext.Provider value={{ selectedBiz, changeBiz }}>
      {props.children}
    </SelectedBizContext.Provider>
  );
}
