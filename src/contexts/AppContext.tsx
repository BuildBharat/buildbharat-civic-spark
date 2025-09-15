import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AppContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AppContext = createContext<AppContextType>({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AppContext.Provider value={{ 
      isSidebarOpen, 
      setIsSidebarOpen, 
      isAuthenticated, 
      login, 
      logout 
    }}>
      {children}
    </AppContext.Provider>
  );
};