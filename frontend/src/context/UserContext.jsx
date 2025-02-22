import { createContext, useContext, useState } from "react";

export const UserDataContext = createContext({});
export const UserContextProvider = UserDataContext.Provider;

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <div>
      <UserContextProvider value={{ user, setUser }}>
        {children}
      </UserContextProvider>
    </div>
  );
};

export default UserContext;
export const UserContextState = () => useContext(UserDataContext);
