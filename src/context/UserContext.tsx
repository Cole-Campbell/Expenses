import React, { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "@firebase/auth";
import { auth } from "../services/firestore";

export interface IUserContext {
  isLoggedIn?: boolean;
  user?: any;
}

const UserContext = React.createContext<IUserContext>({
  isLoggedIn: false,
  user: null,
});

export const useUserContext = () => React.useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        if (window.location.pathname !== "/login") {
          window.location.pathname = "/login";
        }
      }
    });
  }, []);

  const contextValue: IUserContext = {
    isLoggedIn: false,
    user,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};