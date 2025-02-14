import React, { createContext, useState, useEffect } from 'react';
import  auth  from '@react-native-firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser); // Automatically updates user on auth state change
    return subscriber; // Unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
