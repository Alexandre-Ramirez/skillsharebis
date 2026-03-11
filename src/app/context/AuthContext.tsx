import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  balance: number;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    // Mock login
    if (username && password) {
      setUser({
        id: '1',
        username,
        balance: 150,
      });
      return true;
    }
    return false;
  };

  const register = (username: string, password: string) => {
    // Mock register
    if (username && password) {
      setUser({
        id: '1',
        username,
        balance: 100,
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
