import React, { useState } from "react";

const MainContext = React.createContext();

function MainProvider(props) {
  const [helloMessage, setHelloMessage] = useState('Hello world!');


  return (
    <MainContext.Provider
      value={{
        helloMessage,
        setHelloMessage
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
export { MainProvider, MainContext };
