import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    console.log("user", user);
    // console.log("token", token);
  }, [user, token]);

  const login = (userData, token) => {
    // console.log("Login data:", userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    setUser(userData);
    setToken(token);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setToken(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => useContext(AuthContext);
