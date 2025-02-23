import { createContext, useContext, useState } from "react";

export const CaptainDataContext = createContext({});

export const useCaptainContext = () => useContext(CaptainDataContext);

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <CaptainDataContext.Provider
      value={{ captain, setCaptain, isLoading, setIsLoading, error, setError }}
    >
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
