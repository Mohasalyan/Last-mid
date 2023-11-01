import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const ContextAuthProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(null);

  const logIn = (email, password) => {
    setUserLogin({ email, password });
  };

  const logOut = () => {
    setUserLogin(null);
  };

  return (
    <AuthContext.Provider value={{ userLogin, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
