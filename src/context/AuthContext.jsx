import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, authWithGoogle } from '../firebaseconfig';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
			console.log(user);
    })
  }, [])

	const singinWithGoogle = () => {
    return auth.signInWithPopup(authWithGoogle);
  }

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const logout = () => auth.signOut();


  const value = {
    currentUser,
    login,
    logout,
    signup,
		singinWithGoogle
  };
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}
