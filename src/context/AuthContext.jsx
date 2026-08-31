import { createContext, useContext, useState, useCallback } from "react";

/**
 * Prototype auth state. No real backend yet — this just remembers whether
 * the visitor has "logged in" so protected routes and nav can react to it.
 * Swap the login/logout bodies for real API calls when the backend exists.
 */

const AuthContext = createContext(null);
const STORAGE_KEY = "experia_auth";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "true"
  );

  const login = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
