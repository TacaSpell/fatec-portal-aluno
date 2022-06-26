import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [authenticatedUser, setAuthenticatedUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setAuthenticatedUser, setError);

    return () => unsubscribe();
  }, [])
  return <AuthContext.Provider value={{ authenticatedUser, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)

  return { ...auth, isAuthenticated: auth.authenticatedUser !== null}
}